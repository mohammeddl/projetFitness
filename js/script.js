const questions = document.querySelectorAll('.faq-question');
        questions.forEach( question=> {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                if (answer.style.display === 'block') {
                    answer.style.display = 'none';
                } else {
                    answer.style.display = 'block';
                }
            });
        });

        function toggleNav(){
            navbar.classList.toggle('active');
        }
        const burgerMenu = document.querySelector('.burger-menu');
        const navbar = document.querySelector('.navbar'); 
    
        burgerMenu.addEventListener('click',toggleNav);
        
    
    // registration
document.getElementById("Contact").addEventListener("submit", function (event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var cin = document.getElementById("cin").value;
    var phone = document.getElementById("phone").value;
    var isValid = true;

    // Full name
    const nameError = document.getElementById("nameError")
    if (name.trim() === "") {
        nameError.innerHTML = "Please enter your full name.<br>";
        isValid = false;
    }else if(!validateFullName(name)) {
        nameError.innerHTML = "Invalid full name.<br>";
        isValid = false;
    }else{
        nameError.innerHTML="" ;
    }

    // Email
    const emailError = document.getElementById("emailError")
    if (email.trim() === "") {
        emailError.innerHTML = "Please enter your email.<br>";
        isValid = false;
    } else if (!validateEmail(email)) {
        emailError.innerHTML = "Please enter a valid email address.<br>";
        isValid = false;
    }else{
        emailError.innerHTML="" ;
    }
    
    // CIN
    const cinError = document.getElementById("cinError");
    if (cin.trim() === "") {
        cinError.innerHTML = "Please enter your CIN.<br>";
        isValid = false;
    }else if (!validateCin(cin)){
        cinError.innerHTML = "Please enter a valid CIN.<br>";
        isValid = false;
    }else{
        cinError.innerHTML = "Invalid full name";
    }

    // Phone
    const phoneError = document.getElementById("phoneError");
    if (phone.trim() === "") {
        phoneError.innerHTML = "Please enter your phone number.<br>";
        isValid = false;
    } else if (!validatePhone(phone)){
        phoneError.innerHTML = "Please enter incorrect phone number.<br>";
        isValid = false;
    }else{
        phoneError.innerHTML = "";
    }

    if (!isValid) {
        event.preventDefault();
    }
});

function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
function validatePhone(phone){
    var regex = /^(?:\+212|212)?\d{9}$/;
    return regex.test(phone);
}

function validateCin(cin){
    var regex = /^[a-zA-Z]{2}\d{6}$/;
    return regex.test(cin);
}
function validateFullName(name) {
    var regex = /^[A-Za-z\s]+$/;
    return regex.test(name);
}
  

  