const containerLogin = document.getElementById('container-login');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signUpForm = document.querySelector('.sign-up form');
const signInForm = document.querySelector('.sign-in form');

registerBtn.addEventListener('click', () => {
    containerLogin.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    containerLogin.classList.remove("active");
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    const name = signUpForm.querySelector('input[type="text"]').value.trim();
    const email = signUpForm.querySelector('input[type="email"]').value.trim();
    const password = signUpForm.querySelector('input[type="password"]').value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return;
    }
    if (!validateEmail(email)) {
        alert("Please enter a valid email.");
        return;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    alert(`Registration Successful!\nName: ${name}\nEmail: ${email}`);
    signUpForm.reset(); // Reset the form fields
    container.classList.remove("active"); // Optionally switch to sign-in
});

// Form submission for sign-in
signInForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    const email = signInForm.querySelector('input[type="email"]').value.trim();
    const password = signInForm.querySelector('input[type="password"]').value.trim();

    // Validation checks
    if (!validateEmail(email)) {
        alert("Please enter a valid email.");
        return;
    }
    if (password === "") {
        alert("Please enter your password.");
        return;
    }

    // Successful sign-in
    alert(`Sign In Successful!\nEmail: ${email}`);
    signInForm.reset(); // Reset the form fields
});


const menuIcon = document.querySelector('.menu-icon ');
menuIcon.addEventListener('click', toggleMenu());


function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "300px";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
}