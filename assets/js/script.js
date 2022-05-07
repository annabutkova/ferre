
const burgerBtn = document.getElementById('burger');
const burgerMenu = document.getElementById('menu');
const body = document.querySelector('body');

burgerBtn.addEventListener('click', function () {
  burgerMenu.classList.toggle('--is-active');
  body.classList.toggle('--is-blocked');
});
