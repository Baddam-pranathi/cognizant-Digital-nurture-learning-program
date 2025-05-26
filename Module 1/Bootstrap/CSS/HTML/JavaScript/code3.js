<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Event Listings</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    .event {
      border: 1px solid #ccc;
      padding: 15px;
      margin-bottom: 15px;
      border-radius: 5px;
    }
    .event.full {
      background-color: #f8d7da;
    }
    .event.past {
      background-color: #e2e3e5;
    }
    button {
      margin-top: 10px;
    }
  </style>
</head>
<body>

  <h1>Available Events</h1>
  <div id="eventContainer"></div>

  <script>
    const today = new Date();

    const events = [
      { name: "Music in the Park", date: "2025-06-15", seats: 5 },
      { name: "Community Cleanup", date: "2025-04-01", seats: 10 },
      { name: "Art & Craft Fair", date: "2025-08-10", seats: 0 },
      { name: "Coding Workshop", date: "2025-07-05", seats: 3 }
    ];

    const container = document.getElementById("eventContainer");

    events.forEach((event, index) => {
      const eventDate = new Date(event.date);
      const isPast = eventDate < today;
      const isFull = event.seats === 0;

      if (isPast || isFull) {
        // Skip rendering invalid events
        return;
      }

      const div = document.createElement("div");
      div.className = "event";
      div.innerHTML = `
        <strong>${event.name}</strong><br>
        Date: ${event.date}<br>
        Seats left: <span id="seats-${index}">${event.seats}</span><br>
        <button onclick="register(${index})">Register</button>
      `;
      container.appendChild(div);
    });

    function register(index) {
      try {
        if (!events[index]) throw new Error("Event not found.");
        if (events[index].seats <= 0) throw new Error("Sorry, no seats available.");

        events[index].seats--;
        document.getElementById(`seats-${index}`).textContent = events[index].seats;
        alert(`You are registered for ${events[index].name}!`);
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    }
  </script>

</body>
</html>
