// === Tambah tombol hamburger untuk mobile ===
const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav-links");

const navToggle = document.createElement("button");
navToggle.innerText = "☰";
navToggle.className = "nav-toggle";
nav.prepend(navToggle);

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// === Animasi tombol Hire Me ===
const hireBtn = document.querySelector(".btn");
if (hireBtn) {
  hireBtn.addEventListener("click", () => {
    hireBtn.innerText = "Thanks! 🚀";
    setTimeout(() => {
      hireBtn.innerText = "Hire Me";
    }, 2000);
  });
}

// === Notifikasi form kontak ===
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("📩 Terima kasih! Pesanmu sudah terkirim.");
    contactForm.reset();
  });
}
