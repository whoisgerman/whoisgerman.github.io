//Animate welcome part of the blurb
const textToType = "Hi, I'm German (Tony).";
const targetElement = document.getElementById("welcome");
let charIndex = 0;
const typingSpeed = 50; // milliseconds per character

function typeWriter() {
  if (charIndex < textToType.length) {
    targetElement.textContent += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, typingSpeed);
  }
}

// Start the typing animation when the page loads
window.onload = typeWriter;

//Light / Dark modes
