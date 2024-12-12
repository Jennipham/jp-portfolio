function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector("hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function flipCard(button) {
    const card = button.closest('.flip-card');
    card.classList.toggle('flipped');
  }
  