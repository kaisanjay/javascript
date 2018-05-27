# javascript


#Array

##Declaring an array

Javascript’s elegance owes a lot to its concise literal syntax for the most common building blocks: object, functions and array.
A literal is the best way to express an array:

var arr = [1, 2, 3, 4];

There is an alternative to that, the Array constructor:

var arr = new Array(1, 2, 3, 4);

###use array literals instead of the Array constructor
###the Array constructor behaves differently if its only argument is a number.

##The `length` property--
What is important to know about `length` is that when you access it, it simply returns the value of the biggest index + 1.
