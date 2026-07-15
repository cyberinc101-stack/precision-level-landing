// PRECISION LEVEL — landing page interactions

document.addEventListener('DOMContentLoaded', () => {
  // Animate the hero readout so it feels like a live sensor,
  // settling on "LEVEL" — mirrors the product's own UI.
  const rollEl = document.getElementById('rollVal');
  const pitchEl = document.getElementById('pitchVal');
  if (rollEl && pitchEl) {
    let frame = 0;
    const settleAt = 38; // frames until it settles flat
    const wobble = () => {
      frame++;
      if (frame < settleAt) {
        const decay = 1 - frame / settleAt;
        const roll = (Math.sin(frame * 0.5) * 6 * decay).toFixed(2);
        const pitch = (Math.cos(frame * 0.4) * 4 * decay).toFixed(2);
        rollEl.textContent = (roll >= 0 ? '+' : '') + roll + '°';
        pitchEl.textContent = (pitch >= 0 ? '+' : '') + pitch + '°';
        requestAnimationFrame(wobble);
      } else {
        rollEl.textContent = '+0.00°';
        pitchEl.textContent = '+0.00°';
      }
    };
    requestAnimationFrame(wobble);
  }

  // Smooth-scroll for in-page nav links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});
