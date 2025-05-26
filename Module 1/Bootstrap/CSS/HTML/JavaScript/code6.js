<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Community Events</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    .event-card {
      background: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 15px;
      margin: 10px 0;
    }
  </style>
</head>
<body>

  <h1>Community Events</h1>
  <div id="allEvents"></div>

  <script>
    let events = [
      { title: "Yoga Retreat", category: "Health" },
      { title: "Jazz Night", category: "Music" },
      { title: "Painting Workshop", category: "Art" }
    ];

    events.push({ title: "Rock Concert", category: "Music" });
    events.push({ title: "Baking Basics", category: "Cooking" });

    const musicEvents = events.filter(event => event.category === "Music");

    const formattedCards = musicEvents.map(event => {
      return `
        <div class="event-card">
          <h3>🎵 ${event.title}</h3>
          <p><strong>Category:</strong> ${event.category}</p>
        </div>
      `;
    });

    document.getElementById("allEvents").innerHTML = formattedCards.join('');
  </script>

</body>
</html>
