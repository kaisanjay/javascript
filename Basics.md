# Values & Types

> string

> number

> boolean

> null and undefined

> object

> symbol (new to ES6)

```
var a;
typeof a;               // "undefined"

a = "hello world";
typeof a;               // "string"

a = 42;
typeof a;               // "number"

a = true;
typeof a;               // "boolean"

a = null;
typeof a;               // "object"--weird, bug

a = undefined;
typeof a;               // "undefined"

a = { b: "c" };
typeof a;               // "object"

```
`typeof` null is an interesting case because it errantly returns "object" when you’d expect it to return "null".

Also, note `a = undefined.` We’re explicitly setting a to the undefined value, but that is behaviorally no different 
from a variable that has no value set yet, like with the var a; line at the top of the snippet.
A variable can get to this “undefined” value state in several different ways, including functions that return 
no values and usage of the void operator.


# Equality
```
var a = "42";
var b = 42;

a == b;         // true
a === b;        // false

```
# Ineqality
```
var a = 41;
var b = "42";
var c = "43";

a < b;      // true
b < c;      // true
```
What happens here? In section 11.8.5 of the ES5 specification, it says that if both values in the < comparison are strings, 
as it is with b < c, the comparison is made lexicographically (aka alphabetically like a dictionary). 
But if one or both is not a string, as it is with a < b, then both values are coerced to be numbers, 
and a typical numeric comparison occurs.

The biggest gotcha you may run into here with comparisons between potentially different value types—remember,
there are no “strict inequality” forms to use—is when one of the values cannot be made into a valid number, such as:
```
var a = 42;
var b = "foo";

a < b;      // false
a > b;      // false
a == b;     // false
```
Wait, how can all three of those comparisons be false? Because the b value is being coerced to the
“invalid number value” NaN in the < and > comparisons, and the specification says that `NaN ` is neither greater than nor 
less than any other value.

The == comparison fails for a different reason. a == b could fail if it’s interpreted either as 42 == NaN or "42" == "foo"—as we explained earlier, the former is the case.
