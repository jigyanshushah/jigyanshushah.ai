const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (progressBar) progressBar.style.width = docHeight > 0 ? (scrollTop / docHeight * 100) + '%' : '0%';
});
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
revealEls.forEach((element) => revealObserver.observe(element));
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('open', menuOpen);
    menuBtn.textContent = menuOpen ? '✕' : '☰';
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  });
  document.querySelectorAll('.mob-link, .mobile-cta').forEach((link) => {
    link.addEventListener('click', () => {
      menuOpen = false;
      mobileMenu.classList.remove('open');
      menuBtn.textContent = '☰';
      document.body.style.overflow = '';
    });
  });
}
