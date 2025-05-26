<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Async JS Example - Fetch Events</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    #spinner {
      display: none;
      margin-bottom: 20px;
      font-weight: bold;
      color: #007bff;
    }
    .event {
      border: 1px solid #ddd;
      padding: 10px;
      margin-bottom: 8px;
      border-radius: 5px;
    }
  </style>
</head>
<body>

  <h1>Community Events</h1>
  <button id="fetchThenBtn">Fetch Events with .then()</button>
  <button id="fetchAsyncBtn">Fetch Events with async/await</button>

  <div id="spinner">Loading events...</div>
  <div id="eventList"></div>

  <script>
    const eventList = document.getElementById('eventList');
    const spinner = document.getElementById('spinner');

    const apiURL = 'https://jsonplaceholder.typicode.com/posts?_limit=5';

    function displayEvents(events) {
      eventList.innerHTML = '';
      events.forEach(event => {
        const div = document.createElement('div');
        div.className = 'event';
        div.innerHTML = `<h3>${event.title}</h3><p>${event.body}</p>`;
        eventList.appendChild(div);
      });
    }

    function fetchEventsThen() {
      eventList.innerHTML = '';
      spinner.style.display = 'block';

      fetch(apiURL)
        .then(response => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.json();
        })
        .then(data => {
          displayEvents(data);
        })
        .catch(error => {
          eventList.textContent = 'Error fetching events: ' + error.message;
        })
        .finally(() => {
          spinner.style.display = 'none';
        });
    }

    async function fetchEventsAsync() {
      eventList.innerHTML = '';
      spinner.style.display = 'block';

      try {
        const response = await fetch(apiURL);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        displayEvents(data);
      } catch (error) {
        eventList.textContent = 'Error fetching events: ' + error.message;
      } finally {
        spinner.style.display = 'none';
      }
    }

    document.getElementById('fetchThenBtn').onclick = fetchEventsThen;
    document.getElementById('fetchAsyncBtn').onclick = fetchEventsAsync;
  </script>

</body>
</html>
