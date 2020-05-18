var loginLink = document.querySelector(".user-link-input");
var loginPopup = document.querySelector(".modal-login");
var email = loginPopup.querySelector("[name = email]");
var password = loginPopup.querySelector("[name = password]");
var isStorageSupport = true;
var storage = "";
var loginForm = loginPopup.querySelector(".login-form");

try {
    storage = localStorage.getItem("email");
} catch(err){
    isStorageSupport = false;
}

loginLink.addEventListener("mouseover", function(evt) {
    evt.preventDefault();
    loginPopup.classList.add("simple-show");
    if(storage) {
        email.value = localStorage.getItem("email");
        password.focus();
    } else {
        email.focus();
    }
});

loginLink.addEventListener("mouseout", function(evt) {
    evt.preventDefault();
    loginPopup.classList.remove("simple-show");
});

loginPopup.addEventListener("mouseover", function(evt) {
    evt.preventDefault();
    loginPopup.classList.add("simple-show");
});

loginPopup.addEventListener("mouseout", function(evt) {
    evt.preventDefault();
    loginPopup.classList.remove("simple-show");
});

loginForm.addEventListener("submit", function(evt){
    if(!email.value || !password.value) {
        evt.preventDefault();
        loginPopup.classList.remove("modal-error");
        loginPopup.offsetWidth = loginPopup.offsetWidth;
        loginPopup.classList.add("modal-error");
    } else {
        if(isStorageSupport) {
            localStorage.setItem("email",email.value);
        }
    }
});

