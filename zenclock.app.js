// Display the "Now" message on the Bangle.js 2 watch
function showNow() {
  g.clear();
  g.setFontAlign(0, 0);
  g.setFont("Vector", 48);
  g.drawString("Now", g.getWidth() / 2, g.getHeight() / 2);
  return true;
}

// Display the current time on the Bangle.js 2 watch
function showTime() {
  // Get the current time
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();


  // Format the time as a string
  var timeString = hours.toString().padStart(2, "0") + ":" +
                   minutes.toString().padStart(2, "0");


  // Display the time on the screen
  g.clear();
  g.setFontAlign(0, 0);
  g.setFont("Vector", 42);
  g.drawString(timeString, g.getWidth() / 2, g.getHeight() / 2);

  // Revert to the "Now" display after 5 seconds
  setTimeout(showNow, 5000);
}

// Set up a button listener to display the time
setWatch(showTime, BTN1, { repeat: true });

// Display the "Now" message on start-up
showNow();