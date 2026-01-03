let search = document.querySelector('#search-bar');
let searchbox = document.querySelector('.search-box');
let menubar = document.querySelector('#menu-bars');
let mynav = document.querySelector('.navbar');
let scrollContainer = document.querySelector(".gallery");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");


scrollContainer.addEventListener("wheel", (evt) =>{
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.edltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

nextbtn.addEventListener("click", ()=>{
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
});

backbtn.addEventListener("click", ()=>{
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
});

search.onclick = () =>{
  searchbox.classList.toggle('active');
};

menubar.onclick= ()=>{
  menubar.classList.toggle('fa-times');
  mynav.classList.toggle('active');
};


