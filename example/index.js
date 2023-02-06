const btnSide = document.querySelector('.btnSide'),
  navBar = document.querySelector('nav'),
  gnbBar = document.querySelector('nav ul');

btnSide.addEventListener('click', () => {
  navBar.classList.add('on');
  btnSide.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
});

navBar.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    navBar.classList.remove('on');
    btnSide.style.backgroundColor = 'white';
  }
});
