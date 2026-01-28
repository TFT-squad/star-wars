// THE SUBMIT BOTTON
const submitform = document.getElementById('submitbtn')

submitform.addEventListener('click', event => {
    // PREVENTING THE EVENT TO RETURN TO THE DEFAULT
    event.preventDefault()
    if (validateForm()){
        console.log("Thank you for contacting us")
        alert("Thank you for contacting us")
    } else {
        console.log("Please fill out all required fields")
        alert("Please fill out all required fields")
    }
});

// FORM VALIDATION FUNCTION
function validateForm() {
    // FIRST NAME
    const fnameValue = document.getElementById('fname').value;
    // LAST NAME
    const lnameValue = document.getElementById('lname').value;
    // EMAIL
    const emailValue = document.getElementById('email').value;
    // MESSAGE
    const messageValue = document.getElementById('message').value;
    // EMAIL REGEX
    const Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // VALIDATING FIRST NAME
    if(fnameValue.length < 2) {
        console.log("First name must be at least 2 characters long.");
        alert("First name must be at least 2 characters long.");
        return false;
    }

    // VALIDATING LAST NAME
    if(lnameValue.length < 2) {
        console.log("Last name must be at least 2 characters long.");
        alert("Last name must be at least 2 characters long.");
        return false;
    }

    // VALIDATING EMAIL
    if(!Regex.test(emailValue)) {
        console.log("Please enter a valid email address.");
        alert("Please enter a valid email address.");
        return false;
    }

    // VALIDATING MESSAGE
    if(messageValue.length < 10) {
        console.log("Message must be at least 10 characters long.");
        alert("Message must be at least 10 characters long.");
        return false;
    }

    return true;
}

function clearForm() {
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}