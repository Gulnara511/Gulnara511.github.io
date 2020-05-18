var catalog = document.querySelector(".jsCatalog");
var catalogPopup = document.querySelector(".modal-catalog");

catalog.addEventListener("mouseover",function(evt) {
    evt.preventDefault();
    catalogPopup.classList.add("simple-show");
});

catalog.addEventListener("mouseout", function(evt){
    evt.preventDefault();
    catalogPopup.classList.remove("simple-show");
});

catalogPopup.addEventListener("mouseover",function(evt) {
    evt.preventDefault();
    catalogPopup.classList.add("simple-show");
});

catalogPopup.addEventListener("mouseout", function(evt){
    evt.preventDefault();
    catalogPopup.classList.remove("simple-show");
});