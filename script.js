const signupForm = document.getElementById('signup-form-wrapper');
const loginForm = document.getElementById('login-form-wrapper');
const signupX = document.getElementById('signup-x');
const loginX = document.getElementById('login-x');
const signupBtn = document.getElementById("signup-btn");
const loginBtn = document.getElementById('login-btn');
const formContnr = document.querySelector('.form-container');

signupBtn.addEventListener('click', () => { 
    signupForm.classList.add('display');
    loginBtn.disabled = true;
    formContnr.classList.add('disable');
});

signupX.addEventListener('click', () => {
    signupForm.classList.remove('display');
    loginBtn.disabled = false;
    formContnr.classList.remove('disable');
})

loginBtn.addEventListener('click', () => {
    loginForm.classList.add('display');
    signupBtn.disabled = true;
    formContnr.classList.add('disable');
})

loginX.addEventListener('click', () => { 
    loginForm.classList.remove('display');
    signupBtn.disabled = false;
    formContnr.classList.remove('disable');
})






