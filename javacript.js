

var p1 =  document.getElementById("count1");
var p2 =  document.getElementById("count2");
var p3 =  document.getElementById("count3");



var ab1 = document.getElementById("ab1");
var ab2 = document.getElementById("ab2");

var sb1 = document.getElementById("sb1");
var sb2 = document.getElementById("sb2");

var alb1 = document.getElementById("alb1");
var alb2 = document.getElementById("alb2");

var reset =  document.getElementById("reset");
  
  
  var i = 0;
  var j = 0;
  var k = 0;


  ab1.addEventListener("click", function() {
    
    p1.innerHTML=++i;

  });

  ab2.addEventListener("click", function() { 
      p1.innerHTML=--i;
      if (i < 0) {
        alert("Count cannot be a negative number!");
        
        i = 0;
        p1.innerHTML = i; 
    }
      
  });


  sb1.addEventListener("click", function() {
    
    p2.innerHTML=++j;

  });

  sb2.addEventListener("click", function() { 
      p2.innerHTML=--j;
      if (j < 0) {
        alert("Count cannot be a negative number!");
        
        j = 0;
        p2.innerHTML = j; 
    }
      
  });


  alb1.addEventListener("click", function() {
    
    p3.innerHTML=++k;

  });

  alb2.addEventListener("click", function() { 
      p3.innerHTML=--k;
      if (k < 0) {
        alert("Count cannot be a negative number!");
        
        k = 0;
        p3.innerHTML = k; 
    }
      
  });



  reset.addEventListener("click", function() {
    
    p1.innerHTML=0;
    p2.innerHTML=0;
    p3.innerHTML=0;
    i = 0;
    j = 0;
    k = 0;

  });