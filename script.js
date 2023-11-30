document.addEventListener("DOMContentLoaded", function () {
    const signupLink = document.getElementById("signup-link");
    const loginLink = document.getElementById("login-link");
    const signupForm = document.getElementById("signup-form");

    signupLink.addEventListener("click", function (event) {
        event.preventDefault();
        showSignupForm();
    });

    loginLink.addEventListener("click", function (event) {
        event.preventDefault();
        showLoginForm();
    });

    function showSignupForm() {
        signupForm.style.display = "block";
    }

    function showLoginForm() {
        signupForm.style.display = "none";
    }
});
