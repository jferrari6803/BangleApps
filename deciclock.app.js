function drawDecimalClock() {
  const now = new Date();

  // Calculate total seconds since midnight
  const totalSeconds =
    now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

  // Convert to decimal time
  const decimalDay = (totalSeconds / 86400) * 24; // 24 decimal hours in a day
  const decimalHours = Math.floor(decimalDay);
  const decimalMinutes = Math.floor((decimalDay - decimalHours) * 100);
  const decimalSeconds = Math.floor(((decimalDay - decimalHours) * 100 - decimalMinutes) * 100);

  // Clear the screen
  g.clear();

  // Set font and draw clock
  g.setFont("Vector", 30); // Large font for display
  g.setFontAlign(0, 0); // Center alignment
  g.drawString(
    `${decimalHours.toString().padStart(2, "0")}:${decimalMinutes
      .toString()
      .padStart(2, "0")}:${decimalSeconds.toString().padStart(2, "0")}`,
    g.getWidth() / 2,
    g.getHeight() / 2
  );

}
setInterval(drawDecimalClock, 1000);
drawDecimalClock();
Bangle.setUI("clock");