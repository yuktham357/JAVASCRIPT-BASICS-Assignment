**WHAT HAPPENING**
The for loop starts, using let i = 0.
let is block-scoped, so each iteration of the loop creates a new binding of i for that iteration.
On each iteration:
A setTimeout is scheduled to run a function after i * 1000 milliseconds (0ms, 1000ms, 2000ms).
The setTimeout callback closes over the block-scoped i from that iteration.
Because let gives each iteration its own unique i, when the timeout callback runs, it still has the correct value of i that was current at the time setTimeout was created.
-------------------------------------------
**WHY THIS WORKS**
let creates a new scope per iteration — unlike var, which shares the same variable across all iterations.
Each setTimeout callback captures its own i value via closure.
Therefore, when the callback executes, i points to the correct index in the names array.

