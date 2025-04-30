**WHAT HAPPENING**
In regular functions, this depends on how the function is called.
Inside setTimeout, the callback is called by the global context, not the user object, so this.name is undefined.
------------------------
**WHY THIS WORKS**
Arrow functions don’t bind their own this.
They capture this from their surrounding scope, which is the user object in this case — this is lexical binding.