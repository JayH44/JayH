const btnSide = document.querySelector('.btnSide'),
  navBar = document.querySelector('nav'),
  gnbBar = document.querySelector('nav ul'),
  btnModal = document.querySelector('.btnBox button'),
  modalBg = document.querySelector('.modalBg'),
  btnOptnModal = document.querySelector('.btnOptnModal');

btnSide.addEventListener('click', () => {
  navBar.classList.add('on');
});

navBar.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    navBar.classList.remove('on');
  }
});

btnModal.addEventListener('click', () => {
  modalBg.classList.add('hide');
  setTimeout(() => {
    modalBg.style.display = 'none';
  }, 300);
});

btnOptnModal.addEventListener('click', () => {
  modalBg.classList.remove('hide');
  setTimeout(() => {
    modalBg.style.display = 'block';
  }, 300);
});

window.addEventListener('resize', () => {
  if (this.innerWidth > 800) navBar.classList.remove('on');
});
