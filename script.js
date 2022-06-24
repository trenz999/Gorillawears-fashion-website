let navbar = document.querySelector('.navbar')
document.querySelector('#menu-bar').onclick = () =>{
    navbar.classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    navbar.classList.remove('active');
}


window.onscroll = () =>{

    if (window.scrollY > 100){
        navbar.classList.remove('active');


        document.querySelector('header').classList.add('active');
        }else{
            document.querySelector('header').classList.remove('active');
        }
}

let themeToggler = document.querySelector('#theme-toggler');
themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.querySelector('body').classList.add('active');
    }else{
        document.querySelector('body').classList.remove('active');
    }
}

var swiper = new Swiper(".product-slider", {
    slidesPerview:3,
    loop:true,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerview: 1,
        },
        550:{
            slidesPerview: 2,
        },
        800:{
            slidesPerview: 3,
        },
        1000: {
            slidesPerview:3,
        },
    },
});
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
//   });