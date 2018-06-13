# for vs for..in vs for..of

## for

```
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < digits.length; i++) {
  console.log(digits[i]);
}
 
 Prints:
0
1
2
3
4
5
6
7
8
9
```

## for...in

```
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits) {
  console.log(digits[index]);
}


Prints:
0
1
2
3
4
5
6
7
8
9

```



But, you still have to deal with the issue of using an index to access the values of the array, and that stinks; it almost makes it more confusing than before.

Also, the for...in loop can get you into big trouble when you need to add an extra method to an array (or another object). Because for...in loops loop over all enumerable properties,
this means if you add any additional properties to the array's prototype, then those properties will also appear in the loop.
```
Array.prototype.decimalfy = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toFixed(2);
  }
};

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const index in digits) {
  console.log(digits[index]);
}



Prints:
0
1
2
3
4
5
6
7
8
9
function() {
 for (let i = 0; i < this.length; i++) {
  this[i] = this[i].toFixed(2);
 }
}
```

## for...of

```
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}



Prints:
0
1
2
3
4
5
6
7
8
9
```
