var  on = false;
setInterval(function() {
  on = !on;
 
g.clear(1)
g.setFont("Vector",30)
g.drawString("The Time",20,30)
g.drawString("is",80,70)

g.setFont("Vector",45)
g.drawString("NOW",45,110)
  }, 500);