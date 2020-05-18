var popup = document.querySelector(".modal-feedback");
var link = document.querySelector(".jsFeedback");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".modal-close");
var fedName = popup.querySelector(".jsFeedbackName");
var fedEmail = popup.querySelector(".jsFeedbackEmail");
var fedText = popup.querySelector(".feedback-input");
var fedForm = popup.querySelector(".modal-feedback-form");

link.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("overlay-show");
    fedName.focus();
});

close.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.remove("modal-show");
    overlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function(evt){
    if ( evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")){
            evt.preventDefault();
            popup.classList.remove("modal-show");
            overlay.classList.remove("overlay-show");
        }
    }
});

fedForm.addEventListener("submit", function(evt){
    if(!fedEmail.value || !fedName.value || !fedText.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }
})
