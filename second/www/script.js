// === Toggle navigation on mobile ===
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav ul');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
  });
}


// === Tutorials Page: Read More / Read Less Toggle ===
document.addEventListener("DOMContentLoaded", () => {
  const readMoreButtons = document.querySelectorAll(".read-more");

  readMoreButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".tutorial-card");
      const fullText = card.querySelector(".full-text");

      if (fullText) {
        const isVisible = fullText.style.display === "block";
        fullText.style.display = isVisible ? "none" : "block";
        button.textContent = isVisible ? "Read More" : "Read Less";
      }
    });
  });
});
