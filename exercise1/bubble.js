
  
  document.getElementById("outer").addEventListener("click", function(event) {
    if (event.target !== this) { //this refers to outer that comes from buublehhtml
      document.getElementById("output").innerText = "Hi from " + event.target.id;
    }
  });
  