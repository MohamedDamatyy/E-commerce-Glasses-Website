let seacrhForm = document.getElementById("search-form");
let searchBtn = document.getElementById("search-btn");

searchBtn.onclick = ()=>{
    seacrhForm.classList.toggle("active");
    navbar.classList.remove("active");
}

let navbar = document.getElementById("navbar");
let menuBtn = document.getElementById("menu-btn");

menuBtn.onclick = ()=>{
    navbar.classList.toggle("active");
    seacrhForm.classList.remove("active");
}

window.onscroll=()=>{
    seacrhForm.classList.remove("active");
    navbar.classList.remove("active");
}

let slides = document.querySelectorAll(".slide");
let index = 0;

function next(){
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active")
}
function prev(){
    slides[index].classList.remove("active");
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add("active")
}