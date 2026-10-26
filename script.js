const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const toast = document.getElementById('toast');
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  });
});

document.querySelectorAll('.course-enroll').forEach(button => {
  button.addEventListener('click', () => {
    const course = button.dataset.course;
    const emailInput = document.getElementById('email');
    emailInput.value = '';
    document.getElementById('formMessage').textContent = `Interested in ${course}? Join the waitlist below.`;
    document.getElementById('get-started').scrollIntoView({ behavior: 'smooth' });
    window.setTimeout(() => emailInput.focus({ preventScroll: true }), 500);
  });
});

document.getElementById('signupForm').addEventListener('submit', event => {
  event.preventDefault();
  const emailInput = document.getElementById('email');
  const email = emailInput.value.trim();
  if (!emailInput.checkValidity() || !email) {
    emailInput.reportValidity();
    return;
  }
  document.getElementById('formMessage').textContent = 'Thanks! Your email has been added to this demo waitlist.';
  showToast('You’re on the list! Thanks for your interest in SkillSpring.');
  event.target.reset();
});
