document.getElementById("up").onclick = function() {
    var num = document.getElementById("num");
    
    num.innerHTML = parseInt(num.innerHTML) + 1;
  }
  
  document.getElementById("down").onclick = function() {
    var num = document.getElementById("num");
    
    num.innerHTML = parseInt(num.innerHTML) - 1;
  }