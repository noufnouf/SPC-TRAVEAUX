const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
let current = 0;

function updateSlider() {
  slidesContainer.style.transform = `translateX(-${current * 100}%)`;
}

document.querySelector(".next").addEventListener("click", () => {
  current = (current + 1) % slides.length;
  updateSlider();
});

document.querySelector(".prev").addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  updateSlider();
});

// Auto-slide toutes les 3 secondes
setInterval(() => {
  current = (current + 1) % slides.length;
  updateSlider();
}, 3000);
const phoneLinks = document.querySelectorAll('a[href^="tel:"]');

phoneLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const number = link.getAttribute("href").replace("tel:", "");

    let message = "";

    if (link.id === "urgence") {
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