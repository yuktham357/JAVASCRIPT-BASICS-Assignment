const form = document.getElementById('authForm');
const formTitle = document.getElementById('form-title');
const toggleText = document.getElementById('toggleText');
const nameGroup = document.getElementById('name-group');
const confirmGroup = document.getElementById('confirm-group');
const termsGroup = document.getElementById('terms-group');
let isLogin = true;

function toggleForm() {
    isLogin = !isLogin;
    formTitle.textContent = isLogin ? "Login" : "Sign Up";
    toggleText.innerHTML = isLogin
        ? `Don't have an account? <button type="button" onclick="toggleForm()">Sign up</button>`
        : `Already have an account? <button type="button" onclick="toggleForm()">Login</button>`;
    nameGroup.style.display = isLogin ? "none" : "block";
    confirmGroup.style.display = isLogin ? "none" : "block";
    termsGroup.style.display = isLogin ? "none" : "block";
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const name = document.getElementById('name');
    const confirm = document.getElementById('confirmPassword');
    const terms = document.getElementById('terms');
    form.querySelectorAll('small').forEach(s => s.style.display = 'none');
    if (!email.value || !/^\S+@\S+\.\S+$/.test(email.value)) {
        email.nextElementSibling.style.display = 'block';
        valid = false;
    }
    if (!password.value || password.value.length < 6) {
        password.nextElementSibling.style.display = 'block';
        valid = false;
    }
    if (!isLogin) {
        if (!name.value.trim()) {
            name.nextElementSibling.style.display = 'block';
            valid = false;
        }
        if (password.value !== confirm.value) {
            confirm.nextElementSibling.style.display = 'block';
            valid = false;
        }
        if (!terms.checked) {
            termsGroup.querySelector('small').style.display = 'block';
            valid = false;
        }
    }
    if (valid) {
        alert(`${isLogin ? 'Logged in' : 'Signed up'} successfully!`);
        form.reset();
    }
}
);
