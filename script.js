const hero = document.getElementById("hero");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    hero.classList.add("morphed");
  } else {
    hero.classList.remove("morphed");
  }
});

