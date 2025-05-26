<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Modern JS Features Example</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .event { border: 1px solid #ccc; padding: 10px; margin-bottom: 8px; border-radius: 4px; }
  </style>
</head>
<body>

  <h1>Community Events (Modern JS)</h1>
  <div id="eventList"></div>

  <script>
    const events = [
      { id: 1, title: 'Music Festival', category: 'music', date: '2025-06-10' },
      { id: 2, title: 'Art Workshop', category: 'art', date: '2025-07-15' },
      { id: 3, title: 'Food Expo', category: 'food', date: '2025-08-20' },
    ];

    const filterAndDisplayEvents = (eventList = [], filterCategory = 'all') => {
      const eventsCopy = [...eventList];

      const filteredEvents = filterCategory === 'all' 
        ? eventsCopy 
        : eventsCopy.filter(({ category }) => category === filterCategory);

      const container = document.getElementById('eventList');
      container.innerHTML = ''; 

      filteredEvents.forEach(({ id, title, category, date }) => {
        const eventDiv = document.createElement('div');
        eventDiv.className = 'event';
        eventDiv.innerHTML = `
          <h3>${title}</h3>
          <p><strong>Category:</strong> ${category}</p>
          <p><strong>Date:</strong> ${date}</p>
        `;
        container.appendChild(eventDiv);
      });
    };

    filterAndDisplayEvents(events);

  </script>

</body>
</html>
