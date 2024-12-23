window.onload = function() {
    // Reset the form fields when the page loads
    document.getElementById("contactForm").reset();
};

function validateForm(){
    var name = document.getElementById("inputName").value;
    var place = document.getElementById("inputPlace").value;
    var mobile = document.getElementById("inputMobile").value;
    var email = document.getElementById("inputEmail").value;
    var message = document.getElementById("inputMessage").value;
    var agree = document.getElementById("agreeCheck").checked;

    var nameError = document.getElementById("nameError");
    var placeError = document.getElementById("placeError");
    var mobileError = document.getElementById("mobileError");
    var emailError = document.getElementById("emailError");
    var messageError = document.getElementById("messageError");
    var agreeError = document.getElementById("agreeError");

    var subject = document.getElementById("inputSubject");
    var fromName = document.getElementById("inputFromName");

    var buttonSubmit = document.getElementById("buttonSubmit");

    nameError.textContent=""
    placeError.textContent=""
    mobileError.textContent=""
    emailError.textContent=""
    messageError.textContent=""
    agreeError.textContent=""

    let isValid = true

    if(name === "" || !/^[a-zA-Z .]*$/.test(name)){
        nameError.textContent="Enter valid name. Use only English alphabets and .(dot)."
        isValid = false
    }
    if(place === ""){
        placeError.textContent="Place is required."
        isValid = false
    }
    if(mobile === "" || !/^\d{5,15}$/.test(mobile)){
        mobileError.textContent="Enter valid mobile number."
        isValid = false
    }
    if(email === "" || !/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email)){
        emailError.textContent="Enter valid email address."
        isValid = false
    }
    if(message === ""){
        messageError.textContent="You have not entered anything! Please enter your message."
        isValid = false
    }
    if(!agree){
        agreeError.textContent="You must agree to these terms before sending me any messages."
        isValid = false
    }

    subject.value = "New enquiry from " + name;
    fromName.value = name

    if(isValid){
        buttonSubmit.classList.remove("btn-primary")
        buttonSubmit.classList.add("btn-success")
        buttonSubmit.setAttribute("disabled", "disabled")
        buttonSubmit.textContent="Form submitted successfully."
    }
 
    return isValid
}