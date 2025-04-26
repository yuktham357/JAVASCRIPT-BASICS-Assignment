**WHAT HAPPENING**
1. creacounter() is called and a new execution context is created.
2. Inside it count variable is created and set to zero value.
3. increamentCounter() is retured, closing over the count variable.
4. counterA and counterB are two separate instances of the function with their own private count variables.
5. so the actual output is 1 2 1
-----------------------------------------
**WHY THIS WORKS**
1. Each time you call creatCounter(), you are creating a new scpre so that returned function remembers the variable count fron its own scope.
2. counterA and counterB are two different functions they create new different scores for the createCounter().
-------------------------------------------