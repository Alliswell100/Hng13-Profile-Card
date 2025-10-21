const form = document.getElementById('form-test');
const emailInput = document.getElementById('email');
const errorMsg = document.getElementById('errorMsg');
const successMsg = document.getElementById('successMsg');
const messageInput = document.getElementById('message');


form.addEventListener('submit', function(event) {
    event.preventDefault(); // stop actual form submission
    const emailValue = emailInput.value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/i;
    const messageValue = messageInput.value.trim();


    if (!emailPattern.test(emailValue)) {
    errorMsg.style.display = 'block';
    successMsg.style.display = 'none';
    }
    else if(messageValue.length < 10) {
        errorMsg.textContent = 'Your Message is less than 10 characters';
        errorMsg.style.display='block'
    
    } else {
    errorMsg.style.display = 'none';
    successMsg.style.display = 'block';
    form.reset(); // clear form inputs
    }
    console.log(successMsg);
    console.log(errorMsg);
});


    