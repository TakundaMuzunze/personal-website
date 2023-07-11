const submitButton = document.getElementById('submit');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('fullname');
const messageInput = document.getElementById('message');
const submissionMessage = document.getElementsByClassName('.form-message');

if (emailInput.value==="" && nameInput.value=== ""){
    alert('Please fill out details correctly');
}
else{
    submissionMessage.classList.add('form-message-shown');
}