### The Spread Operator: ... 


The spread operator signals that an array or iterable object should have its contents split into separate arguments within a call.  A few examples:
```
// Pass to function that expects separate multiple arguments
// Much like Function.prototype.apply() does
let numbers = [9, 4, 7, 1];
Math.min(...numbers); // 1

// Convert NodeList to Array
let divsArray = [...document.querySelectorAll('div')];

// Convert Arguments to Array
let argsArray = [...arguments];
```
The awesome added bonus is being able to convert iterable objects (NodeList, arguments, etc.) to true arrays -- something we've used `Array.from` or other hacks to do for a long time.
