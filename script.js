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

// document.querySelectorAll('.featured').forEach(images =>{
//    images.onclick = () =>{
//     document.querySelector('.small-image').scr = images.getAttribute('scr');
//    } 
// })

document.querySelectorAll('.small-image-1').forEach(images =>{
    images.onclick = () =>{
     document.querySelector('.big-image-1').scr = images.getAttribute('scr');
    } 
 })



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


let countDate = new Date('aug, 2022 00:00:00').getTime();

function countDown(){
    let now = new Date().getTime();
    gap = countDate - now;

    let seconds = 1000;
    let minutes = seconds * 60; 
    let hours = minutes * 60;
    let day = hours * 24;


    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hours));
    let m = Math.floor((gap % (hours)) / (minutes));
    let s = Math.floor((gap % (minutes)) / (seconds));

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;

}

setInterval(function(){
    countDown()
},1000);