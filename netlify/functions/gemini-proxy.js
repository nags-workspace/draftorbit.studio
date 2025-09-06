// This is a Node.js function, which runs on a server, not in a browser.

exports.handler = async function (event, context) {
    // 1. Get the API key from environment variables.
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

    // 2. Only allow POST requests.
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
    }

    try {
        // 3. Get the chat history sent from the front-end.
        const { history } = JSON.parse(event.body);

        // 4. Create the NEW, more knowledgeable prompt.
        const conversationPrimer = [
            {
                role: "user",
                parts: [{
                    text: `You are an AI assistant for DraftOrbit Studio. Your task is to answer the user's question and then suggest relevant follow-up questions.

                    YOUR INSTRUCTIONS:
                    1.  Adopt a friendly, casual, and helpful persona. Use emojis.
                    2.  Answer the user's query based on the provided context.
                    3.  After the main answer, generate 2-3 short, relevant follow-up questions.
                    4.  CRITICAL: Your ENTIRE output must be a single, valid JSON object. Do not write any text or markdown formatting. Your response must start with '{' and end with '}'.
                    
                    The JSON object must have this exact structure:
                    {
                      "response": "Your main chat message goes here.",
                      "quickReplies": ["Suggested question 1?", "Suggested question 2?", "Suggested question 3?"]
                    }

                    COMPANY CONTEXT:
                    - Company Name: DraftOrbit Studio
                    - Website: https://www.draftorbit.com (REPLACE WITH YOUR ACTUAL DOMAIN)
                    - Core Services: 3D Printing (FDM technology), Custom CAD Design for manufacturing, and Rapid Prototyping.
                    - Key Materials: PLA (for general prototypes), PETG (for strength & outdoor use), ABS (for durability).
                    - Typical Turnaround Time: 3-5 business days, but this is an estimate and varies by project complexity.
                    - Getting a Quote: The ONLY way to get a price is to direct the user to the "Contact Us" page on the website to submit their project files and details. Do not invent prices.`
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

        // ... (The rest of the fetch and JSON parsing logic is the same as before) ...
        const response = await fetch(GEMINI_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error.message);
        }

        const data = await response.json();
        const botText = data.candidates?.[0]?.content?.parts?.[0]?.text;

        let parsedResponse;
        try {
            const startIndex = botText.indexOf('{');
            const endIndex = botText.lastIndexOf('}');
            if (startIndex !== -1 && endIndex !== -1) {
                const jsonString = botText.substring(startIndex, endIndex + 1);
                parsedResponse = JSON.parse(jsonString);
            } else {
                throw new Error("No valid JSON object found in the AI response.");
            }
        } catch (e) {
            console.error("Failed to parse AI response as JSON. Falling back.", e);
            parsedResponse = {
                response: botText, 
                quickReplies: []
            };
        }
        
        return {
            statusCode: 200,
            body: JSON.stringify(parsedResponse)
        };

    } catch (error) {
        console.error("Error in serverless function:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message || 'An internal server error occurred.' })
        };
    }
};