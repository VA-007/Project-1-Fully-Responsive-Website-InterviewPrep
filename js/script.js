// Preloader Function
function loadFunction() {
  var preloader = document.getElementById('preLoader');
  preloader.style.display = 'none';
}

// Burger Function 
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
}

navSlide();


































// const navSlide = () => {           //  this line means const nav slide is a anonymous function 
//   const burger = document.querySelector('.burger');
//   const nav = document.querySelector('.nav-links');

//   burger.addEventListener('click', () => {
//     nav.classList.toggle('nav-active');
//   });
// }

// navSlide();
