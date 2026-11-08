
/* Select HTML Elements */

const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");

const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");

const emailError = document.getElementById("emailError");

const messageError = document.getElementById("messageError");

const formMessage = document.getElementById("formMessage");


/* Validate Name */

function validateName() {

    const name = nameInput.value.trim();

    if (name === "") {
        nameError.textContent = "Please enter your name.";
        return false;
    }

    nameError.textContent = "";
    return true;

}


/* Validate Email */

function validateEmail() {

    const email = emailInput.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Please enter your email.";
        return false;
    }

    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        return false;
    }

    emailError.textContent = "";
    return true;

}


/* Validate Message */

function validateMessage() {

    const message = messageInput.value.trim();

    if (message === "") {
        messageError.textContent = "Please enter your message.";
        return false;
    }

    messageError.textContent = "";
    return true;

}


/* Live Form Validation */

nameInput.addEventListener("input", function() {
    validateName();
    formMessage.textContent = "";
});

emailInput.addEventListener("input", function() {
    validateEmail();
    formMessage.textContent = "";
});

messageInput.addEventListener("input", function() {
    validateMessage();
    formMessage.textContent = "";
});


/* Form Submit Event */

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Check all required fields
    const nameValid = validateName();

    const emailValid = validateEmail();

    const messageValid = validateMessage();


    // Show result
    if (nameValid && emailValid && messageValid) {

        formMessage.textContent =
            "Your message has been validated successfully!";

        formMessage.style.color = "green";

        // Clear the form
        contactForm.reset();

    } else {

        formMessage.textContent =
            "Please correct the errors above.";

        formMessage.style.color = "red";

        // Focus on first invalid field
        if (!nameValid) {
            nameInput.focus();
        } else if (!emailValid) {
            emailInput.focus();
        } else {
            messageInput.focus();
        }

    }

});
