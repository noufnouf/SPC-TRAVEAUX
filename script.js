document.addEventListener('DOMContentLoaded', function () {
  const slidesContainer = document.querySelector(".slides");
  const slides = document.querySelectorAll(".slide");
  let current = 0;

  function updateSlider() {
    if (slidesContainer) {
      slidesContainer.style.transform = `translateX(-${current * 100}%)`;
    }
  }

  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
      current = (current + 1) % slides.length;
      updateSlider();
    });

    prevBtn.addEventListener("click", () => {
      current = (current - 1 + slides.length) % slides.length;
      updateSlider();
    });

    // Auto-slide toutes les 3 secondes
    setInterval(() => {
      current = (current + 1) % slides.length;
      updateSlider();
    }, 3000);
  }

  // Burger Menu
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Téléphone confirmation
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  phoneLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const number = link.getAttribute("href").replace("tel:", "");
      let message = "";

      if (link.classList.contains("phone-urgence")) {
        message = `📞 Vous allez appeler le numéro d'urgence de SPC Travaux : ${number}\nVoulez-vous continuer ?`;
      } else {
        message = `📞 Vous allez appeler SPC Travaux : ${number}\nVoulez-vous continuer ?`;
      }

      const confirmation = confirm(message);
      if (confirmation) {
        window.location.href = link.getAttribute("href");
      }
    });
  });
});