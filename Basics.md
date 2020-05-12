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
## Comparison operators
JavaScript has both strict and type–converting comparisons. A strict comparison (e.g., ===) is only true if the operands are of the same type and the contents match. The more commonly-used abstract comparison (e.g. ==) converts the operands to the same type before making the comparison .
For relational abstract comparisons (e.g., <=), the operands are first converted to primitives, then to the same type, before comparison.

```
console.log(1 == 1);
// expected output: true

console.log('1' == 1);
// expected output: true

console.log(1 === 1);
// expected output: true

console.log('1' === 1);
// expected output: false
```

#### Features of comparisons:

 - Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.
 - Two numbers are strictly equal when they are numerically equal (have the same number value). NaN is not equal to anything, including NaN. Positive and negative zeros are equal to one another.
 - Two Boolean operands are strictly equal if both are true or both are false.
 - Two distinct objects are never equal for either strict or abstract comparisons.
 - An expression comparing Objects is only true if the operands reference the same Object.
 - Null and Undefined Types are strictly equal to themselves and abstractly equal to each other.
 
 
```
 1    ==  1         // true
'1'  ==  1         // true
1    == '1'        // true
0    == false      // true
0    == null       // false
var object1 = {'key': 'value'}, object2 = {'key': 'value'}; 
object1 == object2 // false
0    == undefined  // false
null == undefined  // true
```

read more  about Inequality, Relational operators on mdn `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators`
 
    
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


# Comma operator

 - ` , ` is an operator that separates expressions and returns the last expression in the chain.

The comma operator (,) evaluates each of its operands (from left to right) and returns the value of the last operand. This lets you create a compound expression in which multiple expressions are evaluated, with the compound expression's final value being the value of the rightmost of its member expressions. This is commonly used to provide multiple parameters to a for loop.

```
let expr = (99, 88, 77)
expr // 77
```
We have three primary expressions 99, 88 and 77. *** All are evaluated *** and the last is assigned to expr.


```
let x = 1;

x = (x++, x);

console.log(x);
// expected output: 2

x = (2, 3);

console.log(x);
// expected output: 3
```

 ### Tip
 You can use the comma operator when you want to include multiple expressions in a location that requires a single expression. The most common usage of this operator is to supply multiple parameters in a for loop.

 - The comma operator is fully different from the comma within arrays, objects, and function arguments and parameters.
 

