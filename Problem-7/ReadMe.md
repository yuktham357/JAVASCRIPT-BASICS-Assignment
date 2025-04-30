**WHY THIS WORKS**
Closures allow the inner functions (increment, decrement) to remember the environment in which they were created.
Each call to setupCounter creates a new scope with its own count, ensuring independent state.
A closure is a function that remembers the variables from its surrounding lexical scope, even after the outer function has finished executing.