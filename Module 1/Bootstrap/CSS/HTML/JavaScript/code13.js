<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Debugging & Testing Registration</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 400px; margin: 20px auto; padding: 10px; }
    form { display: flex; flex-direction: column; gap: 12px; }
    label { font-weight: bold; }
    input, select, button { padding: 8px; font-size: 1rem; }
    .message { margin-top: 15px; font-weight: bold; }
    .success { color: green; }
    .error { color: red; }
  </style>
</head>
<body>

  <h2>Debugging Registration Form</h2>

  <!-- Registration form -->
  <form id="registrationForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Your full name" required />

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="example@mail.com" required />

    <label for="eventSelect">Select Event:</label>
    <select id="eventSelect" name="eventSelect" required>
      <option value="">-- Choose an event --</option>
      <option value="music">Music Festival</option>
      <option value="art">Art Workshop</option>
      <option value="food">Food Expo</option>
    </select>

    <button type="submit">Register</button>
  </form>

  <div id="responseMsg" class="message"></div>

  <script>
    const form = document.getElementById('registrationForm');
    const responseMsg = document.getElementById('responseMsg');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('Form submit event triggered');  

      const formData = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        event: form.eventSelect.value
      };
      console.log('Form data collected:', formData);

      responseMsg.textContent = 'Submitting...';
      responseMsg.className = 'message';

      debugger; 

      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
        .then(response => {
          console.log('Fetch response:', response);
          if (!response.ok) throw new Error('Network response was not OK');
          return response.json();
        })
        .then(data => {
          console.log('Fetch data received:', data);
          responseMsg.textContent = `Registration successful! Thank you, ${formData.name}.`;
          responseMsg.className = 'message success';
          form.reset();
        })
        .catch(error => {
          console.error('Fetch error:', error);
          responseMsg.textContent = 'Submission failed. Please try again later.';
          responseMsg.className = 'message error';
        });
    });
  </script>

</body>
</html>
