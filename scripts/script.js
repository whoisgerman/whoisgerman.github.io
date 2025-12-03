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


//Mobile navbar and its accessibility
const openButton = document.getElementById('open-sidebar-button');
const navbar = document.getElementById('navbar');

const media = window.matchMedia("(width < 900px)");

media.addEventListener('change', (e) => updateNavbar())

function updateNavbar(e) {
  const isMobile = e.matches
  console.log(isMobile);
  if(isMobile) {
    navbar.setAttribute('inert','');
  }
  else{
    //desktop device
    navbar.removeAttribute('inert');
  }
}

function openSidebar() {
  navbar.classList.add('show');
  openButton.setAttribute('aria-expanded', 'true');
  navbar.removeAttribute('inert');
}

function closeSidebar() {
  navbar.classList.remove('show');
  openButton.setAttribute('aria-expanded', 'false');
  navbar.setAttribute('inert','');
}

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', closeSidebar);
});

updateNavbar(media);