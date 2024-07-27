
document.addEventListener("DOMContentLoaded", function() {
    
    var contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            validateContactForm();
        });
    }

    
    var loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            validateLoginForm();
        });
    }
});


function validateContactForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var feedback = document.getElementById("formFeedback");

    if (!name || !email || !message) {
        feedback.textContent = "All fields are required.";
        feedback.style.color = "red";
        return false;
    }

    
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        feedback.textContent = "Please enter a valid email address.";
        feedback.style.color = "red";
        return false;
    }

    feedback.textContent = "Thank you for your message!";
    feedback.style.color = "green";
    return true;
}

function validateLoginForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var feedback = document.getElementById("loginFeedback");

    if (!username || !password) {
        feedback.textContent = "Username and password are required.";
        feedback.style.color = "red";
        return false;
    }

    feedback.textContent = "Login successful!";
    feedback.style.color = "green";
    return true;
}
