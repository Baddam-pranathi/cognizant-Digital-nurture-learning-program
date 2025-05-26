<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Event Manager with Functions & Closures</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    .event {
      border: 1px solid #ccc;
      margin: 10px 0;
      padding: 10px;
    }
  </style>
</head>
<body>

  <h1>Event Manager</h1>
  <input type="text" id="searchInput" placeholder="Search category...">
  <button onclick="searchEvents()">Search</button>

  <div id="eventList"></div>

  <script>

    const events = [];

    function registrationTracker() {
      const counts = {};

      return function (category) {
        counts[category] = (counts[category] || 0) + 1;
        return counts[category];
      };
    }

    const trackRegistration = registrationTracker();

    function addEvent(name, date, category, seats) {
      events.push({ name, date, category, seats });
    }

    function registerUser(eventIndex) {
      const event = events[eventIndex];
      if (event && event.seats > 0) {
        event.seats--;
        const count = trackRegistration(event.category);
        alert(`Registered for ${event.name} in ${event.category} category.\nTotal registrations in this category: ${count}`);
        renderEvents(events);
      } else {
        alert("Registration failed: No available seats.");
      }
    }

    function filterEventsByCategory(category) {
      return events.filter(e => e.category.toLowerCase() === category.toLowerCase());
    }

    function dynamicFilter(callback) {
      return events.filter(callback);
    }

    function renderEvents(eventArray) {
      const container = document.getElementById("eventList");
      container.innerHTML = "";
      eventArray.forEach((event, index) => {
        const div = document.createElement("div");
        div.className = "event";
        div.innerHTML = `
          <strong>${event.name}</strong><br>
          Date: ${event.date}<br>
          Category: ${event.category}<br>
          Seats: ${event.seats}<br>
          <button onclick="registerUser(${index})">Register</button>
        `;
        container.appendChild(div);
      });
    }

    function searchEvents() {
      const query = document.getElementById("searchInput").value;
      const filtered = dynamicFilter(e => e.category.toLowerCase().includes(query.toLowerCase()));
      renderEvents(filtered);
    }

    addEvent("Tech Conference", "2025-06-10", "Technology", 5);
    addEvent("Music Festival", "2025-07-20", "Entertainment", 10);
    addEvent("Art Expo", "2025-08-01", "Art", 7);
    addEvent("Hackathon", "2025-09-15", "Technology", 8);

    renderEvents(events);
  </script>

</body>
</html>
