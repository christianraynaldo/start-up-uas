function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

const revealItems = document.querySelectorAll(".section, .hero-card, .hero-text");

revealItems.forEach((item) => item.classList.add("reveal"));

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.88;

  revealItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerBottom) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Terima kasih! Pesan Anda sudah terkirim ke ReWear Studio.");
});
