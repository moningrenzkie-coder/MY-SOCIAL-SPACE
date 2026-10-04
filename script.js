const phone = document.querySelector('#profile');
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
if (phone && window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let frame = 0;
  phone.addEventListener('pointermove', (event) => {
    const rect = phone.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      phone.style.transform = `perspective(1200px) rotateY(${-7 + x * 10}deg) rotateX(${3 - y * 8}deg) translateZ(8px)`;
    });
  });
  phone.addEventListener('pointerleave', () => {
    cancelAnimationFrame(frame);
    phone.style.transform = '';
  });
}
const backgroundToggle = document.querySelector('#background-toggle');
const backgroundContent = document.querySelector('#background-content');
if (backgroundToggle && backgroundContent) {
  backgroundToggle.addEventListener('click', () => {
    const expanded = backgroundToggle.getAttribute('aria-expanded') === 'true';
    backgroundToggle.setAttribute('aria-expanded', String(!expanded));
    backgroundContent.hidden = expanded;
  });
}
