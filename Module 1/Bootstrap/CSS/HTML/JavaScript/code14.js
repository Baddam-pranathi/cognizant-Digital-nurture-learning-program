<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>jQuery & JS Frameworks Demo</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    .event-card {
      width: 200px;
      padding: 15px;
      margin: 10px;
      border: 1px solid #333;
      border-radius: 6px;
      display: none; 
      background-color: #f0f0f0;
    }
    #eventsContainer {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
  </style>
</head>
<body>

  <h2>Community Events</h2>
  
  <button id="registerBtn">Show Events</button>
  <button id="hideBtn">Hide Events</button>
  
  <div id="eventsContainer">
    <div class="event-card">Music Festival</div>
    <div class="event-card">Art Workshop</div>
    <div class="event-card">Food Expo</div>
  </div>

  <script>
    $('#registerBtn').click(function() {
      $('.event-card').fadeIn(600);
    });
    $('#hideBtn').click(function() {
      $('.event-card').fadeOut(600);
    });
  </script>

  <!--
    Benefit of moving to frameworks like React or Vue:
    - They offer component-based architecture which makes building,
      maintaining, and reusing UI parts more efficient and scalable.
  -->

</body>
</html>
