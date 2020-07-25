// Preloader Function
function loadFunction() {
  var preloader = document.getElementById('preLoader');
  preloader.style.display = 'none';
}

// Burger Function and Animation
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li')


  burger.addEventListener('click', () => {

    // Toggle Nav
    nav.classList.toggle('nav-active');

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    //Toggle Burger lines Animation
    burger.classList.toggle('toggle');

  });


}

navSlide();                   // Function Invoked to toggle the nav


































// const navSlide = () => {           //  this line means const nav slide is a anonymous function 
//   const burger = document.querySelector('.burger');
//   const nav = document.querySelector('.nav-links');

//   burger.addEventListener('click', () => {
//     nav.classList.toggle('nav-active');
//   });
// }

// navSlide();
