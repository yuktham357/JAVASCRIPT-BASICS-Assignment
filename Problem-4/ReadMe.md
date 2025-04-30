**WHAT HAPPENING**
The loop uses var i, which is function-scoped (not block-scoped). Normally this would cause a problem, because all setTimeout callbacks would share the same i.
But here, you wrap the setTimeout inside an Immediately Invoked Function Expression (IIFE).
javascript
Copy
Edit
(function(index) {
  setTimeout(...);
})(i);
Each time the loop runs, the current value of i is passed into the IIFE as index.
The IIFE creates a new scope and binds index to the current value of i.
Inside that new scope, the setTimeout callback closes over index, which now does not change — it’s fixed for that specific loop iteration.
--------------------------------------------
**WHY THIS WORKS**
var i alone would cause all callbacks to share the same variable i, which ends up being 3 after the loop.
The IIFE captures a copy of the value of i at the time of each loop iteration by passing it as an argument (index).
Each setTimeout closes over its own index, which remains fixed — so the output is correct.