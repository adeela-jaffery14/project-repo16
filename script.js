const signupForm = document.getElementById('signup-form-wrapper');
const loginForm = document.getElementById('login-form-wrapper');
const signupX = document.getElementById('signup-x');
const loginX = document.getElementById('login-x');
const signupBtn = document.getElementById("signup-btn");
const loginBtn = document.getElementById('login-btn');

signupBtn.addEventListener('click', () => { 
    signupForm.classList.add('display');
    loginBtn.disabled = true;
});

signupX.addEventListener('click', () => {
    signupForm.classList.remove('display');
    loginBtn.disabled = false;
})

loginBtn.addEventListener('click', () => {
    loginForm.classList.add('display');
    signupBtn.disabled = true;
})

loginX.addEventListener('click', () => { 
    loginForm.classList.remove('display');
    signupBtn.disabled = false;
})






