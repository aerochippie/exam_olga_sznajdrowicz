const fname = document.querySelector('#name');
const fnameError = document.querySelector("#fnameError");
const fnameErrorLength = document.querySelector("#fnameLengthError")
const email = document.querySelector('#email');
const emailError = document.querySelector("#emailError")
const subject = document.querySelector('#subject');
const subjectError = document.querySelector("#subjectError")
const description = document.querySelector('#description');
const descriptionError = document.querySelector("#descriptionError")


const form = document.querySelector('.right');



function validateForm(event){
  
        event.preventDefault();

if(checkLength(fname.value,0) === true){
    fnameError.style.display="none";
} else{
    fnameError.style.display="block"
}
if(checkLength(fname.value,4) === true){
    fnameErrorLength.style.display="none";
} else{
    fnameErrorLength.style.display="block"
}
if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
} else {
    emailError.style.display = "block";
}

if(checkLength(subject.value,14) === true){
    subjectError.style.display="none";
} else{
    subjectError.style.display="block"
}
if(checkLength(description.value,24) === true){
    descriptionError.style.display="none";
} else{
    descriptionError.style.display="block"
}




}

form.addEventListener("submit", validateForm);



function checkLength(value, len) {
    if(value.trim().length > len){
        return true;
    }
    else{
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}