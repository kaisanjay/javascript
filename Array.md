


# Array


## Declaring an array

Javascript’s elegance owes a lot to its concise literal syntax for the most common building blocks: object, functions and array.
A literal is the best way to express an array:

` var arr = [1, 2, 3, 4]; `

There is an alternative to that, the Array constructor:

` var arr = new Array(1, 2, 3, 4); `

### use array literals instead of the Array constructor
### the Array constructor behaves differently if its only argument is a number.




> Note-
```


arrays are numerically indexed (as you’d expect), but the tricky thing is that they also are
objects that can have string keys/properties added to them (but which don’t count toward the length of the array)

var a = [ ];



a[0] = 1;

a["foobar"] = 2;



a.length;       // 1

a["foobar"];    // 2

a.foobar;       // 2


```
> Generally, it’s not a great idea to add string keys/properties to arrays. 
> Use objects for holding values in keys/properties, and save arrays for strictly numerically indexed values.



## The `length` property--

What is important to know about `length` is that when you access it, it simply returns the value of the biggest index + 1.

```
var arr = [1, 2, 3, 4];
console.log(arr.length); // 4
arr[30] = 2; 
console.log(arr.length); // 31 - even though there are no elements between index 5 and 29

```
## Array methods -

### LIFO behavior (stack)
 Last-In-First-Out
 
 
#### `push(v)` -- adds an element v at the end of the array (at index length) --returns the new length of the array
#### `pop()` --removes the last element --returns the element that was deleted

```
var arr = [true, 2, 3, "4"];
arr.push(5); 
console.log(arr);               // [true, 2, 3, "4", 5]

last_element = arr.pop(); 
console.log(arr);               // [true, 2, 3, "4"]
console.log(last_element);      // 5

```

### FIFO behavior (queue)
First-In-First-Out

#### shift() – returns the first item of the list and deletes the item
#### push(v) – see above

```
var arr = [true, 2, 3, "4"];
first_item = arr.shift();
console.log(arr);               // [2, 3, "4"]
console.log(first_item);        // true

arr.push(first_item);
```


### Reordering methods
#### `reverse()` - (original array will not be affected)
The function creates a duplicate of the original array and reverse the order of the elements. Again, the original array will not be affected.

#### `sort()` -

#### `concat()` -(original array will not be affected.)
Creates a new array based on the elements in the current array. It's important to know that the original array is not altered. The operation is made on the copy of that array. ` concat()` accepts any number of arguments which will be added at the end of the array. Using it without arguments is a elegent way to clone the initial array.
```
var arr = [true, 2, 3, "4"];
new_array = arr.concat(5, 6, 7)
console.log(new_array);         // [true, 2, 3, "4", 5, 6, 7]
```

#### `slice()` - (original array will not be affected.)`
Similar to `concat()`, slice creates a copy of the array and extracts a subsequence of it. Used with no parameters, it returns a copy of the original. With one argument - index -, returns all elements from that index to the end. Additionally, it can be used with 2 arguments - start_index and end_index, in which case it will return all elements in that interval
(**excluding** the one from last_index).

The function can be used with a negative value as parameter. In this case, the start index will be counted from the end of the array - start_index = array.length - param

```
var arr = [true, 2, 3, "4"];
new_array = arr.slice(0, 2);
console.log(new_array);         // [true, 2]

```
#### `splice()` -
`Splice()` has very similar use cases like `concat()` and `splice()`, the only difference is that
**the operation is made on the original array.**

It's a destructive method, you won't be able to revert it, so be careful to that when using it.

It can take more arguments splice(start_index, number_of_deleted_items, element1, element2, .... elementN). In this case, starting from start_index, it will delete the number of items specified on the second argument. The elements element1, element2..elementN will be added, in this order to the array. Basically, you replace a number of items with the elements you provide.

The function returns an array with the deleted items.

You can adapt the behavior as you wish. For example splice(start_index, number_of_deleted_items) for deleting elements or splice(start_index, 0, item_to_insert) for inserting without deleting.

```
var arr = [true, 2, 3, "4"];
arr.splice(0, 1, 1); // It replace the first item with 1
console.log(arr);                // [1, 2, 3, "4"]

```

```
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

myFish.splice() // []

myFish.slice() // (5) ["angel", "clown", "drum", "mandarin", "sturgeon"]

splice will change the origial array and it returns what is being changed but the ariginal array will be distorted

myFish.splice(1) // ["clown", "drum", "mandarin", "sturgeon"]

myFish // ["angel"]

the splice operation outputs diffent and the original array is differenet

array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

```


***splice()'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete.***



### Iterative methods -

Iterative methods are very versatile and used in many scenarios. You will most likely encounter them even when working with the latest frameworks as well (angular, react, vue).

You will provide a function which will be applied on every element on that array. The function will receive the array element as parameter and perform the operation. Optionally, the function takes other 2 arguments - `index` with the index of the elemnt in the list and `array` - a reference to the original array. If you are using them, you have to be careful to ***avoid modifying the array argument** since this will affect the original array and cause unpleasant side effects.

Alongside the function, you can also provide a scope object - a reference to an object which will serve as ~`this` inside the function.

`every()` – returns true if function returns true on every item

`filter()` – returns an array of all items for which the function returns true

`forEach()` – no return value (just run the function on every element in the list)

`map()` – returns a new list with the result of each item in an array

`some()` – returns true if the function returns true for at least one of the items

```
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var every_result_is_smaller_than_9 = numbers.every(item => item < 9);

// this is equivalent with 
var every_result_is_smaller_than_9 = numbers.every(function(item) { return item < 9; });


console.log(every_result_is_smaller_than_9);  // false

var some_resulst_are_smaller_than_9 = numbers.some(item => item < 9);
console.log(some_resulst_are_smaller_than_9); // true

var odd_numbers = numbers.filter(item => item % 2 == 1);
console.log(odd_numbers);        // [1, 3, 5, 7, 9]

numbers.forEach(item => console.log("works"));


var numbers_plus_one = numbers.map(item => item + 1);
console.log(numbers_plus_one);

```


### Reduction Methods

As the name suggested, a reduction function reduce an array to a single result.

For example, let's imagine a list of numeric values. If I want to know the sum of all elements, I will take a variable sum which is initally 0 and iterate over the array. Each element will be added to my variable and, at the end of iteration, the result will be sum.

This is a perfect example of a reduce operation. I'm appling an operation to all items, progressively building the result. At each interation, I will have a partial result - the sum of elements I added so far - and the value of the element.

Reduce function are mostly used for calculating sums, concatenating values and all operation that can be applied to multiple values in order to get one result. The 1st argument of the reducer will be the function which will be called for each item. The function will have 2 parameter myFun(partial_result, current_item) and must return the partial result after dealing with the current item. Optionally, like in the case of iterative methods, it can take other 2 arguments - index and array -.

The second argument - initial_value - represent the partial result we will have at the first call. This would be equivalent with initializing our sum with 0 before the start of the iteration. At the first call of the function, current_item will be the first item in the list and partial_result will be initial value. If the second argument is not provided, the reduction will start at the second item in the list. In the first call, current_item will be the second item and partial_result will be the first item in the list. This is very convenient for some cases, including in our example.

Javascript provides 2 reducer function: reduce() and reduceRight() - which iterates the elements starting from the end of the array -.

```
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var total = numbers.reduce(function(sum, value) {
return sum + value;
}, 0);

console.log(total);


// here I don't provide the seconds argument (initial value) -> 
// at first call, sum = numbers[0] and value = numbers[1] so the result is the same
var total = numbers.reduce(function(sum, value) {
return sum + value;
});

console.log(total);


var concatenate = numbers.reduceRight((str, value) => str = str + value, '');
console.log(concatenate); // '987654321'

// we start from '' add concatenate each value, starting from the right

```


## Other Methods

- Array.prototype.flat()

The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

```
var arr1 = [1, 2, [3, 4]];
arr1.flat(); 
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

##### The flat method removes empty slots in arrays:
```
var arr5 = [1, 2, , 4, 5];
arr5.flat();
// [1, 2, 4, 5]
```


### find/findIndex (new in ES6)

JavaScript gives developers Array.prototype.indexOf to get the index of a given item within an array, but indexOf doesn't provide a method to calculate the desired item condition; you also need to search for an exact known value.  Enter find and findIndex -- two methods for searching an array for the first match of a calculated value:

```
let ages = [12, 19, 6, 4];

let firstAdult = ages.find(age => age >= 18); // 19
let firstAdultIndex = ages.findIndex(age => age >= 18); // 1
```

find and findIndex, through allowing a calculated value search, also prevent unnecessary side effects and looping through possible values!








