// Array to store previous bot responses
var previousBotResponses = [];

function sendMessage() {
    var userInput = document.getElementById("user-input").value.trim();
    if (!userInput) return; // Do not send empty messages

    var chatBox = document.getElementById("chat-box");

    // Display user message
    var userMessage = createMessageElement(userInput, true);
    chatBox.appendChild(userMessage);

    // Clear user input
    document.getElementById("user-input").value = "";

    // Simulate bot response
    var botResponse = generateBotResponse(userInput);

    // Check if botResponse has been used recently
    if (isResponseRepeated(botResponse)) {
        botResponse = generateNewResponse(botResponse);
    }

    // Display bot message
    var botMessage = createMessageElement(botResponse, false);
    chatBox.appendChild(botMessage);

    // Scroll to bottom of chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

function createMessageElement(message, isUser) {
    var messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.classList.add("chat-message");
    if (isUser) {
        messageElement.classList.add("user-message");
    } else {
        messageElement.classList.add("bot-message");
    }
    return messageElement;
}

function generateBotResponse(userInput) {
    // Replace this with your actual bot response generation logic
    // Example: return a random response from an array
    var responses = [
        "I'm just a demo bot. Replace me with real AI!",
        "Sorry, I didn't quite get that.",
        "How can I assist you further?",
        "Let me check that for you.",
        "That's interesting! Tell me more."
    ];
    var randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

function isResponseRepeated(response) {
    // Check if the response has been used recently
    return previousBotResponses.includes(response);
}

function generateNewResponse(currentResponse) {
    // Generate a new response if the current one has been repeated recently
    var responses = [
        "Could you elaborate on that?",
        "Here's something else.",
        "Let's try a different approach."
    ];
    var filteredResponses = responses.filter(function (response) {
        return !previousBotResponses.includes(response);
    });
    var randomIndex = Math.floor(Math.random() * filteredResponses.length);
    var newResponse = filteredResponses[randomIndex];

    // Update previousBotResponses
    previousBotResponses.push(newResponse);
    if (previousBotResponses.length > 3) {
        previousBotResponses.shift(); // Remove oldest response if more than 3
    }

    return newResponse;
}
