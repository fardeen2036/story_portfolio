const hero = document.getElementById("hero");
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  // Hero morph
  if (window.scrollY > 50) {
    hero.classList.add("morphed");
  } else {
    hero.classList.remove("morphed");
  }

  // Section reveal
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;

    if (top < trigger) {
      section.classList.add("active");
    }
  });
});
