var searchLink = document.querySelector(".user-link-search");
var searchPopup = document.querySelector(".modal-search");

searchLink.addEventListener("mouseover", function(evt) {
    evt.preventDefault();
    searchPopup.classList.add("simple-show");
});

searchLink.addEventListener("mouseout", function(evt){
    evt.preventDefault();
    searchPopup.classList.remove("simple-show");
});

searchPopup.addEventListener("mouseover", function(evt) {
    evt.preventDefault();
    searchPopup.classList.add("simple-show");
});

searchPopup.addEventListener("mouseout", function(evt){
    evt.preventDefault();
    searchPopup.classList.remove("simple-show");
});