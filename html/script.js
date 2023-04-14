const signupForm = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const mobileInput = document.getElementById('mobile');

// Get error message elements
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');
const mobileError = document.getElementById('mobile-error');

// Add submit event listener to form
signupForm.addEventListener('submit', (event) => {
  // Prevent form submission
  event.preventDefault();

  // Reset error messages
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  confirmPasswordError.textContent = '';
  mobileError.textContent = '';

  // Get form values
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const confirmPasswordValue = confirmPasswordInput.value.trim();
  const mobileValue = mobileInput.value.trim();

  // Validate name
  if (nameValue === '') {
    nameError.textContent = 'Name is required';
    nameInput.focus();
    return;
  }

  // Validate email
  if (emailValue === '') {
    emailError.textContent = 'Email is required';
    emailInput.focus();
    return;
  } else if (!isValidEmail(emailValue)) {
    emailError.textContent = 'Invalid email address';
    emailInput.focus();
    return;
  }

  // Validate password
  if (passwordValue === '') {
    passwordError.textContent = 'Password is required';
    passwordInput.focus();
    return;
  } else if (passwordValue.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long';
    passwordInput.focus();
    return;
  }

  // Validate confirm password
  if (confirmPasswordValue === '') {
    confirmPasswordError.textContent = 'Confirm Password is required';
    confirmPasswordInput.focus();
    return;
  } else if (passwordValue !== confirmPasswordValue) {
    confirmPasswordError.textContent = 'Passwords do not match';
    confirmPasswordInput.focus();
    return;
  }

  // Validate mobile number
  if (mobileValue === '') {
    mobileError.textContent = 'Mobile Number is required';
    mobileInput.focus();
    return;
  } else if (!isValidMobile(mobileValue)) {
    mobileError.textContent = 'Invalid mobile number';
    mobileInput.focus();
    return;
  }

  // Store form data in localStorage
  const formData = {
    name: nameValue,
    email: emailValue,
    password: passwordValue,
    mobile: mobileValue
  };
  localStorage.setItem('formData', JSON.stringify(formData));

  // Clear form
  signupForm.reset();

  // Show success message
  alert('Sign up successful');
});

// Function to validate email address
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Function to validate mobile number
function isValidMobile(mobile) {
  const regex = /^[0-9]{10}$/;
  return regex.test(mobile);
}
