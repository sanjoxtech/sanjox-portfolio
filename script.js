/* SanjoX — single-screen portfolio: cursor glow + role typing */
document.addEventListener('DOMContentLoaded', () => {
  // cursor glow
  const glow = document.getElementById('cursorGlow');
  if (glow && window.innerWidth >= 768) {
    document.addEventListener('mousemove', (e) => {
      requestAnimationFrame(() => { glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px'; });
    });
  }

  // role typing
  const el = document.getElementById('typingText');
  if (!el) return;
  const phrases = ['AI Tinkerer', 'Builder', 'Loop Engineer', 'Cloud Architect', 'Open to Work'];
  let p = 0, i = 0, deleting = false;
  function tick() {
    const cur = phrases[p];
    el.textContent = cur.substring(0, deleting ? i - 1 : i + 1);
    i += deleting ? -1 : 1;
    let speed = deleting ? 45 : 95;
    if (!deleting && i === cur.length) { speed = 1800; deleting = true; }
    else if (deleting && i === 0) { deleting = false; p = (p + 1) % phrases.length; speed = 450; }
    setTimeout(tick, speed);
  }
  setTimeout(tick, 900);
});
