document.addEventListener("DOMContentLoaded", function () {
    // Load header
    fetch("header.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("header").innerHTML = data;
        })
        .catch((error) => {
            console.error("Error loading header:", error);
        });

    // Get elements
    const chatBubble = document.getElementById("chat-bubble");
    const popup = document.getElementById("popup");
    const chatForm = document.getElementById("chat-form");
    const chatWindow = document.getElementById("chat-window");
    const messageForm = document.getElementById("message-form");
    const messageInput = document.getElementById("message-input");
    const chatBox = document.getElementById("chat-box");

    // Show popup when chat bubble is clicked
    chatBubble.addEventListener("click", () => {
        popup.classList.remove("hidden");
    });

    // Show chat window when form is submitted
    chatForm.addEventListener("submit", (event) => {
        event.preventDefault();
        // Process the form data
        const name = document.getElementById("name").value;
        // Hide the popup and show the chat window
        popup.classList.add("hidden");
        chatWindow.classList.remove("hidden");
        // Display welcome message
        chatBox.value = `Welcome to the chat, ${name}! Please type your message below and wait for an agent to join...\n`;
    });

    // Handle message form submission
    messageForm.addEventListener("submit", (event) => {
        event.preventDefault();
        // Capture and display the message
        const message = messageInput.value;
        chatBox.value += `You: ${message}\n`;
        messageInput.value = "";
    });

    // Hide popup and chat window when clicking outside of them
    popup.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.classList.add("hidden");
        }
    });

    chatWindow.addEventListener("click", (event) => {
        if (event.target === chatWindow) {
            chatWindow.classList.add("hidden");
        }
    });

    //Toggle header
    const toggleButton = document.getElementById("toggleNavBtn");

    toggleButton.addEventListener('click', function() {
        const navLinks = document.getElementById('navLinks');
        if (navLinks.classList.contains('hidden')) {
          navLinks.classList.remove('hidden');
          navLinks.classList.add('flex', 'flex-col', 'space-y-4');
        } else {
          navLinks.classList.add('hidden');
          navLinks.classList.remove('flex', 'flex-col', 'space-y-4');
        }
      });
});
