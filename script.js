const hero = document.getElementById("hero");
const reveals = document.querySelectorAll(".reveal");

const storyWrapper = document.querySelector(".story-wrapper");
const title = document.getElementById("story-title");
const text = document.getElementById("story-text");
const guide = document.getElementById("guide");
const head = document.getElementById("head");

window.addEventListener("scroll", () => {

  /* HERO MORPH */
  if (window.scrollY > 50) {
    hero.classList.add("morphed");
  } else {
    hero.classList.remove("morphed");
  }

  /* REVEAL SECTIONS */
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;
    if (top < trigger) section.classList.add("active");
  });

  /* STICKY STORY ANIMATIC */
  if (!storyWrapper) return;

  const rect = storyWrapper.getBoundingClientRect();
  const progress = Math.min(Math.max(-rect.top / rect.height, 0), 1);

  // WALKING
  guide.style.transform = `translateY(${progress * 80}px)`;

  // STORY STATES
  if (progress < 0.33) {
    title.textContent = "The Problem";
    text.textContent =
      "Medical information overwhelms users when they are already anxious.";
    head.classList.add("look-right");
  }
  else if (progress < 0.66) {
    title.textContent = "The UX Challenge";
    text.textContent =
      "How can AI guide users without increasing fear or confusion?";
  }
  else {
    title.textContent = "The Solution";
    text.textContent =
      "A calm, conversational Medical AI Bot that prioritizes clarity and trust.";
    head.classList.remove("look-right");
  }

});
