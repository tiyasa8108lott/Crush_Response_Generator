document.addEventListener('DOMContentLoaded', function() {
    const crushNameInput = document.getElementById('crush-name');
    const generateButton = document.getElementById('generate-response');
    const responseDiv = document.getElementById('response');
    
    // Array of possible responses
    const responses = [
        "definitely has a crush on you too! 💕",
        "thinks you're really cute! 😊",
        "has been wanting to talk to you more! 📱",
        "smiles every time they see your name pop up! 😍",
        "is too shy to tell you how they feel! 🙈",
        "has told their friends about you! 👀",
        "is waiting for you to make the first move! ✨",
        "thinks about you before falling asleep! 💭",
        "is hoping you'll ask them out! 🌹",
        "gets butterflies when you're around! 🦋",
        "likes you more than you know! 😘",
        "dreams about you every night! 🌙",
        "feels a spark every time they see you! ⚡️",
        "wants to take things to the next level! 💑",
        "is secretly falling for you! 💖",
        "thinks you're the one they've been waiting for! 💌",
        "wishes you could go on a date soon! 🌟",
        "feels a connection with you that they can't explain! 🔥",
        "thinks you're perfect just the way you are! 🌸"
    ];
    
    generateButton.addEventListener('click', function() {
        const crushName = crushNameInput.value.trim();
        
        if (crushName === '') {
            responseDiv.textContent = "Please enter your crush's name first!";
            responseDiv.classList.add('show');
            return;
        }
        
        // Add loading effect
        responseDiv.textContent = "Reading their thoughts...";
        responseDiv.classList.add('show');
        
        // Simulate loading time
        setTimeout(function() {
            // Get random response
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            responseDiv.textContent = `${crushName} ${randomResponse}`;
        }, 1500);
    });
    
    // Clear response when input changes
    crushNameInput.addEventListener('input', function() {
        responseDiv.classList.remove('show');
    });
});
