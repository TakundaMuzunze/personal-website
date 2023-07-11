const submitButton = document.getElementById('submit');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('fullname');
const messageInput = document.getElementById('message');
const submissionMessage = document.getElementById('displayed-message');

const formValidation = (event) => {
    event.preventDefault();
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