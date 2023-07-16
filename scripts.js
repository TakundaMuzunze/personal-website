const submitButton = document.getElementById('submit');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('fullname');
const messageInput = document.getElementById('message');
const submissionMessage = document.getElementById('displayed-message');

const formValidation = (event) => {
    // event.preventDefault();
    if (emailInput.value === "" && nameInput.value === "" && messageInput.value === "") {
        alert('Please fill out your details in the form correctly');
    }
    else {
        submissionMessage.classList.add('form-message-shown');
        submitButton.style.display= "none";
    }
};

submitButton.addEventListener('click', function(event) {
    formValidation(event);
});

const toggleButton = document.getElementById('toggle-menu');
let navBar = document.getElementById('navbar');
const bodyContainer = document.getElementById('blur-container');
const navLinks = document.querySelectorAll('.navigation-bar li a');

toggleButton.addEventListener('click', function() {
    navBar.classList.toggle('active-navbar');
    bodyContainer.classList.toggle('blur');
});

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navBar.classList.remove('active-navbar');
        bodyContainer.classList.remove('blur');
    });
});