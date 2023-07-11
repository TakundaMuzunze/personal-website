const submitButton = document.getElementById('submit');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('fullname');
const messageInput = document.getElementById('message');
const submissionMessage = document.getElementsByClassName('.form-message');

const formValidation = () => {
    if (emailInput.value === "" && nameInput.value === "") {
        alert('Please fill out your details in the form correctly');
    }
    else {
        submissionMessage.classList.add('form-message-shown');
    }
};

submitButton.addEventListener(click, function() {
    formValidation();
});