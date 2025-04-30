**WHAT HAPPENING**
var is function-scoped and hoisted (declaration moves to the top, initialization does not).
Inside revealMystery, var mysteryVariable is hoisted to the top of the function, making the first log inside the function undefined.
The global mysteryVariable remains unaffected by the local declaration in the function.
--------------------------
**WHY THIS WORKS**
let and const are block-scoped and also hoisted, but they reside in a temporal dead zone (TDZ) until their definition is evaluated.
Accessing them before their declaration throws a ReferenceError.


