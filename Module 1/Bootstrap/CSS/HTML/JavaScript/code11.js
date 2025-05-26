<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Event Registration Form</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; max-width: 400px; margin: auto; }
    form { display: flex; flex-direction: column; gap: 15px; }
    label { font-weight: bold; }
    input, select { padding: 8px; font-size: 1rem; }
    .error { color: red; font-size: 0.9rem; }
    .success { color: green; font-weight: bold; margin-top: 15px; }
  </style>
</head>
<body>

  <h2>Event Registration</h2>
  <form id="registrationForm" novalidate>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Your full name" required />
    <div class="error" id="nameError"></div>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="example@mail.com" required />
    <div class="error" id="emailError"></div>

    <label for="eventSelect">Select Event:</label>
    <select id="eventSelect" name="eventSelect" required>
      <option value="">-- Choose an event --</option>
      <option value="music">Music Festival</option>
      <option value="art">Art Workshop</option>
      <option value="food">Food Expo</option>
    </select>
    <div class="error" id="eventError"></div>

    <button type="submit">Register</button>
  </form>

  <div class="success" id="successMsg"></div>

  <script>
    const form = document.getElementById('registrationForm');
    const nameInput = form.elements['name'];
    const emailInput = form.elements['email'];
    const eventSelect = form.elements['eventSelect'];

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const eventError = document.getElementById('eventError');
    const successMsg = document.getElementById('successMsg');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      
      nameError.textContent = '';
      emailError.textContent = '';
      eventError.textContent = '';
      successMsg.textContent = '';

      let valid = true;

      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        nameError.textContent = 'Please enter your name (min 2 characters).';
        valid = false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        valid = false;
      }

      if (!eventSelect.value) {
        eventError.textContent = 'Please select an event.';
        valid = false;
      }

      if (valid) {
        successMsg.textContent = `Thank you, ${nameInput.value.trim()}! You have registered for the ${eventSelect.options[eventSelect.selectedIndex].text}.`;
        form.reset();
      }
    });
  </script>

</body>
</html>
