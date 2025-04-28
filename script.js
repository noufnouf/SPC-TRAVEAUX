document.addEventListener('DOMContentLoaded', function () {
  const slidesContainer = document.querySelector(".slides");
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  let current = 0;

  if (slidesContainer && slides.length > 0) { // ← AJOUT de la condition !
    // Clone la première image
    const firstSlideClone = slides[0].cloneNode(true);
    slidesContainer.appendChild(firstSlideClone);

    function updateSlider(animate = true) {
      if (animate) {
        slidesContainer.style.transition = "transform 0.5s ease-in-out";
      } else {
        slidesContainer.style.transition = "none";
      }
      slidesContainer.style.transform = `translateX(-${current * 100}%)`;
    }

    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    if (nextBtn && prevBtn) {
      nextBtn.addEventListener("click", moveNext);
      prevBtn.addEventListener("click", movePrev);
      setInterval(moveNext, 3000);
    }

    function moveNext() {
      current++;
      updateSlider();
      if (current === totalSlides) {
        setTimeout(() => {
          current = 0;
          updateSlider(false);
        }, 500);
      }
    }

    function movePrev() {
      if (current === 0) {
        current = totalSlides;
        updateSlider(false);
      }
      current--;
      updateSlider();
    }
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

// Scroll Animation
const scrollElements = document.querySelectorAll('.scroll-reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  scrollElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('revealed');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);