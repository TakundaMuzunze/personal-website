const submitButton = document.getElementById('submit');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('fullname');
const messageInput = document.getElementById('message');
const submissionMessage = document.getElementById('displayed-message');

const formValidation = (event) => {
    event.preventDefault();

     if (messageInput.value === "" && nameInput.value === "" && emailInput.value === ""){
        alert('Please fill out the form with your details');
        return false; 
    }
    
    if (emailInput.value === "" || !emailInput.value.includes('@')) {
        alert('Please enter a valid email address');
        return false; 
    }

    if (nameInput.value === "") {
        alert('Please enter your name');
        return false; 
    }

    if (messageInput.value === "") {
        alert('Please enter your message');
        return false; 
    } 

    submissionMessage.classList.add('form-message-shown');
    submitButton.style.display= "none";
    return true;
};

submitButton.addEventListener('click', function(event) {
    formValidation(event);
});

/*Navigation Bar Menu*/
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