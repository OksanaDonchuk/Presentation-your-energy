const openModalBtn = document.querySelector('.data-modal-team-open');
const closeModalBtn = document.querySelector('.data-modal-team-close');
const modal = document.querySelector('.data-modal-team');

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

function openModal() {
  modal.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  modal.classList.add('is-hidden');
  document.body.style.overflow = 'visible';
}
