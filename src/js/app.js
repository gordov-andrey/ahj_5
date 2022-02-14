const btn = document.querySelector('.btn');
const popover = document.querySelector('.popover');

btn.addEventListener('mouseenter', () => {
    popover.classList.add('active');
});

btn.addEventListener('mouseleave', () => {
  popover.classList.remove('active');
});