/* =================================================================
    DraftOrbit Studio - AI Assistant (Secure & Dynamic Replies with Markdown)
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

    // --- 2. API Configuration (SECURE) ---
    const SECURE_API_ENDPOINT = '/.netlify/functions/gemini-proxy';
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

    // --- 4. Core Logic: Get AI Response from our proxy ---
    const getAIResponse = async (history) => {
        try {
            const response = await fetch(SECURE_API_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ history: history })
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Proxy Function Error:", errorData.error);
                return { response: "I'm having a little trouble connecting to my brain right now. Please try again in a moment.", quickReplies: [] };
            }

            return await response.json();

        } catch (error) {
            console.error("Network or Fetch Error:", error);
            return { response: "Sorry, I can't connect to the network. Please check your internet connection.", quickReplies: [] };
        }
    };

    // --- 5. Event Handler for Sending a Message (UPDATED) ---
    const handleSendMessage = async (prefilledText = null) => {
        const userText = prefilledText || textInput.value.trim();
        if (userText === '') return;

        addMessage(userText, 'user');
        apiChatHistory.push({ role: "user", parts: [{ text: userText }] });
        
        textInput.value = '';
        hideQuickReplies();
        showTypingIndicator();

        const aiResponseObject = await getAIResponse(apiChatHistory);
        
        hideTypingIndicator();
        
        // Convert the AI's response from Markdown to HTML before displaying it.
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
    console.log('✅ AI assistant with Markdown rendering initialized.');
}