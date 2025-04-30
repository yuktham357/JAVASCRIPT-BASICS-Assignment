function setupCounter(initialValue) {
    let count = initialValue;
    function increment() { count++; return count; }
    function decrement() { count--; return count; }
    return { increment, decrement };
  }
  