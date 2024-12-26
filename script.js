// script.js

// Znajdź przycisk i audio w dokumencie
const soundToggle = document.getElementById('sound-toggle');
const backgroundAudio = document.getElementById('background-audio');

// Obsługa kliknięcia w przycisk audio
soundToggle.addEventListener('click', () => {
  if (backgroundAudio.paused) {
    backgroundAudio.play();
    soundToggle.textContent = 'Wyłącz dźwięk';
    soundToggle.setAttribute('aria-pressed', 'true');
  } else {
    backgroundAudio.pause();
    soundToggle.textContent = 'Włącz dźwięk';
    soundToggle.setAttribute('aria-pressed', 'false');
  }
});

// Efekt fade-in na przewijanie
const faders = document.querySelectorAll('.fade-in-on-scroll');

const appearOptions = {
  threshold: 0.1,             // 10% widoczności
  rootMargin: '0px 0px -50px 0px'
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
