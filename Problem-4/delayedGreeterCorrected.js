function delayedGreeterCorrected(names) {
    for (var i = 0; i < names.length; i++) {
      (function(index) { // IIFE creates a new scope
        setTimeout(function() {
          console.log(`Hello, ${names[index]}!`);
        }, index * 1000);
      })(i); // Immediately invoke the function with current value of i
    }
  }
  
  delayedGreeterCorrected(['Alice', 'Bob', 'Charlie']);
  