const inputs = document.querySelector('.input');

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus")
    }
}

inputs.forEach((inputs) =>{
    inputs.addEventListener("focus", focusFunc)
    inputs.addEventListener("blur", blurFunc)

});

const btnToggler = document.querySelector('.navbar');
btnToggler.classList.toggle()
 

