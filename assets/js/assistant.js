/* =================================================================
    DraftOrbit Studio - AI Assistant (GitHub Pages Version)
    
    This version connects DIRECTLY to the Gemini API.
    It is SECURED by restricting the API key in the Google Cloud Console.
================================================================= */

function initializeAssistant() {
    // --- 1. Get all necessary elements from the DOM ---
    const assistantWindow = document.getElementById('assistant-window');
    const assistantToggle = document.getElementById('assistant-toggle');
    const closeAssistantBtn = document.getElementById('close-assistant');
    const chatBody = document.getElementById('assistant-chat-body');
    const textInput = document.getElementById('assistant-input');
    const sendBtn = document.getElementById('assistant-send-btn');
    const quickRepliesContainer = document.getElementById('assistant-quick-replies');

    if (!assistantWindow || !textInput || !chatBody || !quickRepliesContainer) {
        console.error("Assistant HTML elements not found. Initialization failed.");
        return;
    }

    // --- 2. API Configuration (Client-Side) ---
    // ▼▼▼ PASTE YOUR RESTRICTED API KEY HERE ▼▼▼
    const GEMINI_API_KEY = "AIzaSyDoSGPTp71JZjTT2MLoVMGZ9X2iRFNrmfg";
    // ▲▲▲ PASTE YOUR RESTRICTED API KEY HERE ▲▲▲
    const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;
    let apiChatHistory = [];

    // --- 3. Chat Helper Functions ---
    const addMessage = (html, sender) => {
        const bubble = document.createElement('div');
        bubble.className = `chat-bubble ${sender}`;
        bubble.innerHTML = html;
        chatBody.appendChild(bubble);
        chatBody.scrollTop = chatBody.scrollHeight;
    };
    const showTypingIndicator = () => {
        const indicator = document.createElement('div');
        indicator.className = 'chat-bubble bot typing-indicator';
        indicator.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
        chatBody.appendChild(indicator);
        chatBody.scrollTop = chatBody.scrollHeight;
    };
    const hideTypingIndicator = () => {
        const indicator = chatBody.querySelector('.typing-indicator');
        if (indicator) indicator.remove();
    };

    // --- 4. Core Logic: Get AI Response DIRECTLY from Gemini ---
    const getAIResponse = async (history) => {
        // This primer is now part of the front-end code.
        const conversationPrimer = [
            {
                role: "user",
                parts: [{
                    text: `You are an AI assistant for DraftOrbit Studio. Your task is to answer the user's question and then suggest relevant follow-up questions. YOUR INSTRUCTIONS: 1. Adopt a friendly, casual, and helpful persona. Use emojis. 2. Answer the user's query based on the provided context. 3. After the main answer, generate 2-3 short, relevant follow-up questions. 4. CRITICAL: Your ENTIRE output must be a single, valid JSON object. Do not write any text or markdown formatting. Your response must start with '{' and end with '}'. The JSON object must have this exact structure: { "response": "Your main chat message goes here.", "quickReplies": ["Suggested question 1?", "Suggested question 2?", "Suggested question 3?"] } COMPANY CONTEXT: - Company Name: DraftOrbit Studio - Website: https://your-username.github.io/your-repo-name/ (REPLACE WITH YOUR ACTUAL URL) - Core Services: 3D Printing (FDM technology), Custom CAD Design for manufacturing, and Rapid Prototyping. - Key Materials: PLA (for general prototypes), PETG (for strength & outdoor use), ABS (for durability). - Typical Turnaround Time: 3-5 business days, but this is an estimate and varies by project complexity. - Getting a Quote: The ONLY way to get a price is to direct the user to the "Contact Us" page on the website.`
                }]
            },
            {
                role: "model",
                parts: [{
                    text: `{
                        "response": "Hey there! I'm the official bot for DraftOrbit Studio. I can tell you about our services, materials, and more. What's on your mind? ✨",
                        "quickReplies": ["What are your services?", "How do I get a quote?", "What's your website address?"]
                    }`
                }]
            }
        ];

        const payload = { contents: [...conversationPrimer, ...history] };

        try {
            const response = await fetch(GEMINI_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                // We'll throw an error to be caught by the catch block
                throw new Error(`API request failed with status ${response.status}`);
            }

            const data = await response.json();
            const botText = data.candidates?.[0]?.content?.parts?.[0]?.text;

            // Robust JSON parsing
            const startIndex = botText.indexOf('{');
            const endIndex = botText.lastIndexOf('}');
            if (startIndex !== -1 && endIndex !== -1) {
                const jsonString = botText.substring(startIndex, endIndex + 1);
                return JSON.parse(jsonString);
            } else {
                // If parsing fails, return the raw text so the user sees something.
                return { response: botText, quickReplies: [] };
            }
        } catch (error) {
            console.error("Network or Fetch Error:", error);
            return { response: "Sorry, I can't connect to the network. Please check your internet connection.", quickReplies: [] };
        }
    };

    // --- 5. Event Handler for Sending a Message ---
    const handleSendMessage = async (prefilledText = null) => {
        if (GEMINI_API_KEY === "PASTE_YOUR_API_KEY_HERE") {
            addMessage("<strong>Configuration needed:</strong> An API key has not been added to `assistant.js`.", 'bot');
            return;
        }

        const userText = prefilledText || textInput.value.trim();
        if (userText === '') return;
        
        addMessage(userText, 'user');
        apiChatHistory.push({ role: "user", parts: [{ text: userText }] });
        
        textInput.value = '';
        hideQuickReplies();
        showTypingIndicator();

        const aiResponseObject = await getAIResponse(apiChatHistory);
        
        hideTypingIndicator();
        
        const formattedHtmlResponse = marked.parse(aiResponseObject.response);
        addMessage(formattedHtmlResponse, 'bot');
        
        apiChatHistory.push({ role: "model", parts: [{ text: aiResponseObject.response }] });
        
        if (aiResponseObject.quickReplies && aiResponseObject.quickReplies.length > 0) {
            renderQuickReplies(aiResponseObject.quickReplies);
        }
    };
    
    // --- 6. Quick Reply Functions ---
    const initialQuickReplies = [
        "What are your services?",
        "How do I get a quote?",
        "What materials do you use?"
    ];

    const renderQuickReplies = (repliesArray) => {
        quickRepliesContainer.innerHTML = '';
        const repliesToRender = repliesArray || initialQuickReplies;

        repliesToRender.forEach(replyText => {
            const button = document.createElement('button');
            button.className = 'quick-reply-btn';
            button.textContent = replyText;
            button.onclick = () => handleSendMessage(replyText);
            quickRepliesContainer.appendChild(button);
        });
    };

    const hideQuickReplies = () => {
        quickRepliesContainer.innerHTML = '';
    };

    // --- 7. Initial Setup and Event Listeners ---
    addMessage("Hello! I'm an AI assistant. How can I help you with your 3D printing or CAD design needs today?", 'bot');

    assistantToggle.addEventListener('click', () => assistantWindow.classList.toggle('show'));
    closeAssistantBtn.addEventListener('click', () => assistantWindow.classList.remove('show'));
    sendBtn.addEventListener('click', () => handleSendMessage(null));
    textInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSendMessage(null);
        }
    });
    
    renderQuickReplies(); 
    console.log('✅ AI assistant for GitHub Pages initialized.');
}