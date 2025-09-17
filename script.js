
const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav-links");

const navToggle = document.createElement("button");
navToggle.innerText = "☰";
navToggle.className = "nav-toggle";
nav.append(navToggle);

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


const hireBtn = document.querySelector(".btn");
if (hireBtn) {
  hireBtn.addEventListener("click", () => {
    hireBtn.innerText = "Thanks! 🚀";
    setTimeout(() => {
      hireBtn.innerText = "Hire Me";
    }, 2000);
  });
}


const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("📩 Thanks! Your message has been sent");
    contactForm.reset();
  });
}


const darkModeBtn = document.createElement("button");
darkModeBtn.innerText = "🌙 Dark Mode";
darkModeBtn.className = "dark-toggle";
document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.innerText = "☀️ Light Mode";
  } else {
    darkModeBtn.innerText = "🌙 Dark Mode";
  }
});
