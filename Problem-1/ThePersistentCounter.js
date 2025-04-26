function createCounter() {
    let count = 0;
    function incrementCounter() {
    count++;
    return count;
    }
    return incrementCounter;
    }
    const counterA = createCounter();
    console.log(counterA()); // Expected: 1, Actual: ?
    console.log(counterA()); // Expected: 2, Actual: ?
    const counterB = createCounter();
    console.log(counterB()); // Expected: 1 (independent counter), Actual: ?