var email = document.getElementById('email');
var password = document.getElementById('password');
var emailmessage = document.getElementById('emailmessage');
var pswmessage = document.getElementById('pswmessage');
var success = document.getElementById('success');
var submit = document.getElementById('submit');
var isemail = false;
var ispswd = false;

function checkSuccess() {
    if(isemail && ispswd) {
        success.style.display = 'block';
    } else {
        success.style.display = 'none';
    }
}

email.addEventListener('keyup', function() {
    var emailvalue = email.value;
    if(emailvalue.length > 3) {
        if (!emailvalue.includes('@') || !emailvalue.includes('.')) {
            emailmessage.style.display = 'block';
            isemail = false;
        } else {
            emailmessage.style.display = 'none';
            isemail = true;
        }
    } else {
        emailmessage.style.display = 'block';
        isemail = false;
    }
    checkSuccess();
});

password.addEventListener('keyup', function() {
    var pswdvalue = password.value;
    if(pswdvalue.length > 8) {
        pswmessage.style.display = 'none';
        ispswd = true;
    } else {
        pswmessage.style.display = 'block';
        ispswd = false;
    }
    checkSuccess();
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    if(isemail && ispswd) {
        var confirmSubmission = confirm('Do you want to submit the form?');
        if(confirmSubmission) {
            alert('Successful signup!');
        } else {
            email.value = '';
            password.value = '';
            isemail = false;
            emailmessage.style.display = 'block';
            pswmessage.style.display = 'block';
            ispswd = false;
            checkSuccess();
        }
    }
});