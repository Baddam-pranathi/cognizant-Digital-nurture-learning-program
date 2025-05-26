<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Event List - DOM Manipulation</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    .event-card {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 15px;
      margin-bottom: 10px;
      background-color: #f9f9f9;
    }
    .event-card button {
      margin-top: 10px;
    }
  </style>
</head>
<body>

  <h1>Available Events</h1>
  <div id="eventContainer"></div>

  <script>
    const events = [
      { title: "Music Fest", seats: 5 },
      { title: "Art Workshop", seats: 0 },
      { title: "Tech Talk", seats: 3 }
    ];

    const container = document.querySelector("#eventContainer");

    function renderEvents() {
      container.innerHTML = ""; 
      events.forEach((event, index) => {
        const card = document.createElement("div");
        card.className = "event-card";

        const title = document.createElement("h3");
        title.textContent = event.title;

        const seatInfo = document.createElement("p");
        seatInfo.textContent = `Available Seats: ${event.seats}`;

        const button = document.createElement("button");
        button.textContent = event.seats > 0 ? "Register" : "Sold Out";
        button.disabled = event.seats === 0;

        button.addEventListener("click", () => {
          if (event.seats > 0) {
            event.seats--;
            renderEvents(); 
          }
        });
        card.appendChild(title);
        card.appendChild(seatInfo);
        card.appendChild(button);
        container.appendChild(card);
      });
    }

    renderEvents();
  </script>

</body>
</html>
