const form = document.getElementById('login-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const email = form.email.value;
  const password = form.password.value;
  
  if (email === '' || password === '') {
    const alertBox = document.createElement('div');
    alertBox.classList.add('alert');
    alertBox.innerHTML = 'Please enter all fields <span class="close-btn">&times;</span>';
    form.appendChild(alertBox);
  } else if (email !== 'example@swiggy.com' || password !== 'password') {
    const alertBox = document.createElement('div');
    alertBox.classList.add('alert');
    alertBox.innerHTML = 'Invalid email or password <span class="close-btn">&times;</span>';
    form.appendChild(alertBox);
  } else {
    window.location.href = "../index.html";
  }
});

// Close alert box
form.addEventListener('click', function(event) {
  if (event.target.classList.contains('close-btn')) {
    const alert = event.target.parentElement;
    alert.remove();
  }
});       
 




