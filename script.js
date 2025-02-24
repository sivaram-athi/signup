//This function check if both email and password are valid or not and id valid than return All good to go!.
function allGoodToGo() {
    let form = document.querySelector('#form_element');
    let emailValid = checkEmail();
    let passwordValid = checkPassword();

    if (emailValid && passwordValid) {
        let allGoodPara = document.createElement('p');
        allGoodPara.classList.add('correct');
        allGoodPara.innerText = `All good to go!`;

        form.appendChild(allGoodPara);
    }
}

//This is the function which check if email is valid or not and return true if email is valid.
function checkEmail(){
    let inputValue = document.getElementById("email").value;
    let errorPara = document.querySelector('#para1');
    
    if(inputValue.length > 2 && inputValue.includes('@') && inputValue.includes('.')){
        errorPara.style.display = `none`;
        return true;
    }
    else{
        errorPara.style.display  = `block`;
        return false;
    }
}


//This is the function which check if password is valid or not and return true if password is valid.
function checkPassword(){
    let inputValue2 = document.getElementById('password').value;
    let errorPara2 = document.getElementById('para2');

    if(inputValue2.length > 7){
        errorPara2.style.display = `none`;
        return true;
    }
    else{
        errorPara2.style.display = `block`;
        return false;
    }
}

//This function give alert message if user confirm that his entries are true.
function confirmWindow(){
    let confirm = window.confirm('Are you sure you want to submit?');

    if(confirm === true){
        alert("successful signup!");
    }
    else{
        //At first I have written all the code to hidded the good to go and para and to display error code but then I remember this code from the course so I use it because it is simple.
        location.reload();
    }
}
