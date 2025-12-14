//Animate welcome part of the blurb
const textToType = "Hi, I'm German (Tony).";
const targetElement = document.getElementById("welcome");
let charIndex = 0;
const typingSpeed = 50; 

function typeWriter() {
  if (charIndex < textToType.length) {
    targetElement.textContent += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, typingSpeed);
  }
}

if(targetElement !== null) {
window.addEventListener('load', typeWriter);
}

//Light and Dark modes 
const toggleBtn = document.getElementById('theme-toggle');
const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
let storedTheme = localStorage.getItem("theme");

function applyTheme(theme) {
  if (theme === "light") {
    document.body.classList.add("lightmode");
  } else {
    document.body.classList.remove("lightmode");
  }
}

function initTheme() {
  if (storedTheme) {
    applyTheme(storedTheme);
  }
  else {
    applyTheme(mediaQuery.matches ? "light" : "dark");
  }

  document.body.classList.remove("theme-preload");

  requestAnimationFrame(() => {
    document.body.classList.add("fade-in");
  });
}

// User toggles manually
function toggleTheme() {
  storedTheme = localStorage.getItem("theme");
  const newTheme = storedTheme === "light" ? "dark" : "light";

  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
}

toggleBtn.addEventListener("click", toggleTheme);

// React to OS theme changes ONLY if user has not chosen manually
mediaQuery.addEventListener("change", (e) => {
  if (!localStorage.getItem("theme")) {
    applyTheme(e.matches ? "light" : "dark");
  }
});

initTheme();

//Mobile navbar and its accessibility
const openButton = document.getElementById('open-sidebar-button');
const navbar = document.getElementById('navbar');

const media = window.matchMedia("(width < 900px)");
media.addEventListener('change', (e) => updateNavbar(e));

function updateNavbar(e) {
  const isMobile = e.matches;
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
  const notDesktop = media.matches;
  if(notDesktop) {
    navbar.classList.remove('show');
    openButton.setAttribute('aria-expanded', 'false');
    navbar.setAttribute('inert','');
  }
}

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', closeSidebar);
}); 

updateNavbar(media);