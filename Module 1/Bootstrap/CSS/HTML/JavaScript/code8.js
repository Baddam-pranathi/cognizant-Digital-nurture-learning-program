<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Event Handling Example</title>
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
    label, select, input {
      margin-right: 15px;
    }
  </style>
</head>
<body>

  <h1>Community Events</h1>

  <!-- Filter by category -->
  <label for="categoryFilter">Filter by Category:</label>
  <select id="categoryFilter">
    <option value="all">All</option>
    <option value="music">Music</option>
    <option value="art">Art</option>
    <option value="tech">Tech</option>
  </select>

  <!-- Quick Search -->
  <label for="searchInput">Search by Name:</label>
  <input type="text" id="searchInput" placeholder="Type event name..." />

  <!-- Container for events -->
  <div id="eventContainer"></div>

  <script>
    const events = [
      { title: "Music Fest", seats: 5, category: "music" },
      { title: "Art Workshop", seats: 3, category: "art" },
      { title: "Tech Talk", seats: 0, category: "tech" },
      { title: "Jazz Night", seats: 4, category: "music" },
      { title: "Painting Class", seats: 2, category: "art" },
    ];

    const container = document.querySelector("#eventContainer");
    const filterSelect = document.querySelector("#categoryFilter");
    const searchInput = document.querySelector("#searchInput");
    function renderEvents() {
      const selectedCategory = filterSelect.value;
      const searchTerm = searchInput.value.toLowerCase();

      container.innerHTML = "";

      const filteredEvents = events.filter(event => {
        const matchCategory = selectedCategory === "all" || event.category === selectedCategory;
        const matchSearch = event.title.toLowerCase().includes(searchTerm);
        return matchCategory && matchSearch;
      });

      if (filteredEvents.length === 0) {
        container.textContent = "No events found.";
        return;
      }

      filteredEvents.forEach((event, index) => {
        const card = document.createElement("div");
        card.className = "event-card";

        const title = document.createElement("h3");
        title.textContent = event.title;

        const seats = document.createElement("p");
        seats.textContent = `Available Seats: ${event.seats}`;

        const button = document.createElement("button");
        button.textContent = event.seats > 0 ? "Register" : "Sold Out";
        button.disabled = event.seats === 0;

        button.onclick = () => {
          if (event.seats > 0) {
            event.seats--;
            renderEvents(); 
            alert(`Registered for ${event.title}!`);
          }
        };

        card.appendChild(title);
        card.appendChild(seats);
        card.appendChild(button);
        container.appendChild(card);
      });
    }

    filterSelect.onchange = renderEvents;

    searchInput.onkeydown = (e) => {
      setTimeout(renderEvents, 100);
    };

    renderEvents();
  </script>

</body>
</html>
