console.log(mysteryVariable); // undefined
mysteryVariable = 10;
console.log(mysteryVariable); // 10

function revealMystery() {
  console.log("Inside revealMystery:", mysteryVariable); // undefined
  var mysteryVariable = 20;
  console.log("Inside revealMystery (after declaration):", mysteryVariable); // 20
}
revealMystery();
console.log("After revealMystery:", mysteryVariable); // 10
