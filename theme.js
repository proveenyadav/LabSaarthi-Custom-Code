(() => {
  const body = document.body;
  const modal = document.querySelector('[data-demo-modal]');
  const openers = document.querySelectorAll('[data-open-demo]');
  const closers = document.querySelectorAll('[data-close-demo]');
  const mobileToggle = document.querySelector('[data-mobile-toggle]');
  const nav = document.querySelector('[data-nav]');

  const openModal = () => {
    if (!modal) return;
    modal.classList.add('is-open');
    body.classList.add('modal-open');
    const firstInput = modal.querySelector('input, select, textarea, button');
    if (firstInput) firstInput.focus();
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('is-open');
    body.classList.remove('modal-open');
  };

  openers.forEach((button) => button.addEventListener('click', openModal));
  closers.forEach((button) => button.addEventListener('click', closeModal));
  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
  });

  if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', () => {
      nav.classList.toggle('is-open');
      mobileToggle.setAttribute('aria-expanded', nav.classList.contains('is-open') ? 'true' : 'false');
    });
  }
})();
