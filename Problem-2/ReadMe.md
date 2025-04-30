**WHAT HAPPENING**
In your for loop, you're using var, which is function-scoped, not block-scoped. This means every setTimeout callback closes over the same i — and by the time those callbacks run (after the loop has finished), i has reached names.length. So, names[i] is undefined, or it's Charlie if you're just hitting the last index over and over.
**WHY THIS WORKS**
With let, each iteration of the loop gets its own i — thanks to block scoping — so closures work as expected.
If you're stuck with var (e.g., older JS environments), wrap the setTimeout in an IIFE.
This works by passing i as a parameter to the IIFE, which creates a new scope for each iteration.