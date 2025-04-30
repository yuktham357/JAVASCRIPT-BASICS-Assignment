function flexibleFunction(a, b, ...rest) {
    console.log("a:", a);
    console.log("b:", b);
    console.log("rest:", rest);
  }
  flexibleFunction(1);             // a: 1, b: undefined, rest: []
  flexibleFunction(1, 2);          // a: 1, b: 2, rest: []
  flexibleFunction(1, 2, 3, 4, 5); // a: 1, b: 2, rest: [3, 4, 5]
    