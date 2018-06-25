- syntax parser
- execution context
   * Creation and Hoisting ` Sets up the functions and variables in the memory`
   * Code Execution        `Runs your code line by line`
- lexical environment

> In javaScript when you create a variable or a function and you are not inside a function those variables and functions get
attached to the global object.

```
var a = 10;

function b() {};

a // 10
window.a //10
```
