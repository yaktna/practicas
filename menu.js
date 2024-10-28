let menuhamburguer = document.querySelector('.nav__logo');

menuhamburguer.addEventListener('click', ()=>{
  let menu = document.querySelector('.list');

  menu.classList.toggle('list--show')
});
