function delayedGreeterLet(names) {
    for (let i = 0; i < names.length; i++) {
      setTimeout(function() {
        console.log(`Hello, ${names[i]}!`);
      }, i * 1000);
    }
  }
  
  delayedGreeterLet(['Alice', 'Bob', 'Charlie']);
  
  // Expected output:
  // Hello, Alice!   (after 0 seconds)
  // Hello, Bob!     (after 1 second)
  // Hello, Charlie! (after 2 seconds)
  