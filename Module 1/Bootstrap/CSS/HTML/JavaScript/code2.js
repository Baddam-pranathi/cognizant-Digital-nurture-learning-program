<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Event Registration</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    #info {
      margin-bottom: 20px;
    }
    button {
      padding: 10px 15px;
      margin-right: 10px;
      font-size: 16px;
    }
  </style>
</head>
<body>

  <h1>Event Registration</h1>
  <div id="info"></div>

  <button onclick="register()">Register</button>
  <button onclick="cancel()">Cancel</button>

  <script>

    const eventName = "Neighborhood Tree Planting";
    const eventDate = "2025-07-10";

    let seatsAvailable = 10;

    function showInfo() {
      document.getElementById("info").innerHTML = `
        <strong>Event:</strong> ${eventName}<br>
        <strong>Date:</strong> ${eventDate}<br>
        <strong>Seats Available:</strong> ${seatsAvailable}
      `;
    }

    function register() {
      if (seatsAvailable > 0) {
        seatsAvailable--; // use --
        alert("Registration successful!");
      } else {
        alert("Sorry, the event is full.");
      }
      showInfo();
    }
    function cancel() {
      seatsAvailable++; // use ++
      alert("Registration canceled.");
      showInfo();
    }

    showInfo();
  </script>

</body>
</html>
