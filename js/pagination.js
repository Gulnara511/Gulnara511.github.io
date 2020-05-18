var pagination1 = document.querySelector(".pagination-item-1");
var pagination2 = document.querySelector(".pagination-item-2");
var pagination3 = document.querySelector(".pagination-item-3");
var slider1 = document.querySelector(".slider-item-1");
var slider2 = document.querySelector(".slider-item-2");
var slider3 = document.querySelector(".slider-item-3");
var body = document.querySelector("body");

pagination1.addEventListener("click", function(evt){
    evt.preventDefault();
    body.classList.remove("purple-background");
    body.classList.remove("orange-background");
    pagination1.classList.add("pagination-item-current");
    pagination2.classList.remove("pagination-item-current");
    pagination3.classList.remove("pagination-item-current");
    slider1.classList.remove("visually-hidden");
    slider2.classList.add("visually-hidden");
    slider3.classList.add("visually-hidden");
});

pagination2.addEventListener("click", function(evt){
    evt.preventDefault();
    body.classList.add("purple-background");
    pagination2.classList.add("pagination-item-current");
    pagination1.classList.remove("pagination-item-current");
    pagination3.classList.remove("pagination-item-current");
    slider2.classList.remove("visually-hidden");
    slider1.classList.add("visually-hidden");
    slider3.classList.add("visually-hidden");
});

pagination3.addEventListener("click", function(evt){
    evt.preventDefault();
    body.classList.add("orange-background");
    pagination3.classList.add("pagination-item-current");
    pagination1.classList.remove("pagination-item-current");
    pagination2.classList.remove("pagination-item-current");
    slider3.classList.remove("visually-hidden");
    slider2.classList.add("visually-hidden");
    slider1.classList.add("visually-hidden");
});

