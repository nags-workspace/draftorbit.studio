/* =================================================================
    DraftOrbit Studio - AI Assistant (Powered by Gemini)
================================================================= */

function initializeAssistant() {
    // --- Get all necessary elements from the DOM ---
    const assistantWindow = document.getElementById('assistant-window');
    const assistantToggle = document.getElementById('assistant-toggle');
    const closeAssistantBtn = document.getElementById('close-assistant');
    const chatBody = document.getElementById('assistant-chat-body');
    const inputArea = document.getElementById('assistant-input-area');
    const textInput = document.getElementById('assistant-input');
    const sendBtn = document.getElementById('assistant-send-btn');

    if (!assistantWindow) return;

    // --- Gemini API Configuration ---
    const GEMINI_API_KEY = ""; // LEAVE THIS EMPTY
    const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${GEMINI_API_KEY}`;

    // --- State Management for Conversation History ---
    let chatHistory = [];

    // --- Chat Helper Functions ---
    const addMessage = (html, sender) => {
        const bubble = document.createElement('div');
        bubble.className = `chat-bubble ${sender}`;
        bubble.innerHTML = html; // Using innerHTML to render potential markdown/links from the AI
        chatBody.appendChild(bubble);
        chatBody.scrollTop = chatBody.scrollHeight;
    };

    const showTypingIndicator = () => {
        const indicator = document.createElement('div');
        indicator.className = 'typing-indicator';
        indicator.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
        chatBody.appendChild(indicator);
        chatBody.scrollTop = chatBody.scrollHeight;
    };

    const hideTypingIndicator = () => {
        const indicator = chatBody.querySelector('.typing-indicator');
        if (indicator) indicator.remove();
    };

    // --- Core Logic: Get AI Response ---
    const getBotResponse = async (history) => {
        // System instructions give the AI its persona and rules.
        const systemPrompt = `You are a helpful and friendly assistant for DraftOrbit Studio, a 3D printing and CAD design company in Mandya, Karnataka. Your goal is to answer user questions concisely. Keep your answers to 2-3 sentences. Do not greet the user unless they greet you first.

        Key Information about DraftOrbit Studio:
        - Services: High-quality 3D Printing (FDM), Custom CAD Design, Prototyping.
        - Location: Mandya, Karnataka.
        - Contact: Users should visit the contact page for quotes or to start a project.
        - Pricing: Varies by project; users need to submit details on the contact page for a quote.`;

        // We combine the system prompt with the conversation history.
        const payload = {
            contents: [
                { role: "user", parts: [{ text: systemPrompt }] },
                { role: "model", parts: [{ text: "Understood. I am ready to help." }] },
                ...history // Add the rest of the conversation
            ]
        };

        try {
            const response = await fetch(GEMINI_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                console.error("API Error Response:", await response.json());
                return "I'm having a little trouble connecting to my brain right now. Please try again in a moment.";
            }

            const data = await response.json();
            const botText = data.candidates?.[0]?.content?.parts?.[0]?.text;
            
            if (botText) {
                // Add only the AI's latest response to our client-side history
                chatHistory.push({ role: "model", parts: [{ text: botText }] });
            }
            
            return botText || "I'm not sure how to answer that. Could you ask in another way?";

        } catch (error) {
            console.error("Error calling Gemini API:", error);
            return "Sorry, I can't connect to the network right now. Please check your connection.";
        }
    };

    // --- Event Handler for Sending a Message ---
    const handleSendMessage = async () => {
        const userText = textInput.value.trim();
        if (userText === '') return;

        addMessage(userText, 'user');
        chatHistory.push({ role: "user", parts: [{ text: userText }] });
        textInput.value = '';
        showTypingIndicator();

        const botResponse = await getBotResponse(chatHistory);
        hideTypingIndicator();
        addMessage(botResponse, 'bot');
    };
    
    // --- Initial Setup and Event Listeners ---
    const setupInitialState = () => {
        inputArea.style.display = 'flex';
        const welcomeMessage = "I'm an AI assistant. Feel free to ask me anything about DraftOrbit Studio!";
        addMessage(welcomeMessage, 'bot');
    };

    assistantToggle.addEventListener('click', () => assistantWindow.classList.toggle('show'));
    closeAssistantBtn.addEventListener('click', () => assistantWindow.classList.remove('show'));
    sendBtn.addEventListener('click', handleSendMessage);
    textInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSendMessage();
        }
    });
    
    setupInitialState();
    
    console.log('✅ AI assistant with conversation history initialized.');
}

