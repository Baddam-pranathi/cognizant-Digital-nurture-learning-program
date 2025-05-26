<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript Objects and Prototypes</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    .event {
      border: 1px solid #ccc;
      padding: 15px;
      margin: 10px 0;
    }
  </style>
</head>
<body>

  <h1>Community Events</h1>
  <div id="eventContainer"></div>

  <script>
    // Event class
    class Event {
      constructor(name, date, category, seats) {
        this.name = name;
        this.date = date;
        this.category = category;
        this.seats = seats;
      }
    }

    Event.prototype.checkAvailability = function () {
      return this.seats > 0 ? "Available" : "Sold Out";
    };

    const event1 = new Event("Yoga Workshop", "2025-06-01", "Health", 10);
    const event2 = new Event("Tech Meetup", "2025-07-12", "Technology", 0);
    const events = [event1, event2];

    const container = document.getElementById("eventContainer");

    events.forEach((ev, index) => {
      const div = document.createElement("div");
      div.className = "event";

      const entries = Object.entries(ev).map(
        ([key, value]) => `<strong>${key}</strong>: ${value}<br>`
      ).join("");

      div.innerHTML = `
        <h3>Event ${index + 1}</h3>
        ${entries}
        <strong>Status:</strong> ${ev.checkAvailability()}
      `;

      container.appendChild(div);
    });
  </script>

</body>
</html>
