const btn = document.querySelector('.btn');
const popover = document.querySelector('.popover');

btn.addEventListener('click', () => {
  popover.classList.toggle('active');
});