// THE SUBMIT BUTTON
const submitform = document.getElementById('submitbtn')

submitform.addEventListener('click', event => {
    // PREVENT THE FORM FROM RETURNING TO DEFUALT
    event.preventDefault()

    if(validateForm()){
        console.log('Thank you for contacting us.')
        alert('Thank you for contacting us.')
    } else {
        console.log('Please fill out all fields correctly.')
        alert('Please fill out all fields correctly.')
    }
})

// FORM VALIDATION FUNCTION
function validateForm(){
    const fnameValue = document.getElementById('fname').value
    const lnameValue = document.getElementById('lname').value
    const emailValue = document.getElementById('email').value
    const messageValue = document.getElementById('message').value
    const Regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,63}$/g;

    if(fnameValue.length < 2){
        console.log('First name needs to be at least 2 characters long.')
        alert('First name needs to be at least 2 characters long.')
        return false
    }
    if(lnameValue.length < 2){
        console.log('Last name needs to be at least 2 characters long.')
        alert('Last name needs to be at least 2 characters long.')
        return false
    }
    if(!emailValue.match(Regex)){
        console.log('Please enter a valid email address.')
        alert('Please enter a valid email address.')
        return false
    }
    if(messageValue.length < 10){
        console.log('Message needs to be at least 10 characters long.')
        alert('Message needs to be at least 10 characters long.')
        return false
    }

    return true
}

function clearForm(){
    document.getElementById('fname').value = ''
    document.getElementById('lname').value = ''
    document.getElementById('email').value = ''
    document.getElementById('message').value = ''
}