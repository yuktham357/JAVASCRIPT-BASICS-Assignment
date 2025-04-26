function createUniqueCounter() {
    let count = 0;
    return {
      increment: function() {
        count++;
        return count;
      },
      getValue: function() {
        return count;
      }
    };
  }
const counterA = createUniqueCounter();
const counterB = createUniqueCounter();
console.log(counterA.increment()); 
console.log(counterA.increment());
console.log(counterA.getValue());
console.log(counterB.increment());
