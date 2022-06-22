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