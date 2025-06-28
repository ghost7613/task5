document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle
  const themeToggle = document.getElementById("themeToggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
  });

  // Mobile Menu Toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Form Submission Message
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formMessage.textContent = "Thank you! Your message has been sent.";
    contactForm.reset();
  });
});
