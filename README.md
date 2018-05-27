# Javascript


# Array

## Declaring an array

Javascript’s elegance owes a lot to its concise literal syntax for the most common building blocks: object, functions and array.
A literal is the best way to express an array:

` var arr = [1, 2, 3, 4]; `

There is an alternative to that, the Array constructor:

` var arr = new Array(1, 2, 3, 4); `

### use array literals instead of the Array constructor
### the Array constructor behaves differently if its only argument is a number.


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
#### `reverse()` -
The function creates a duplicate of the original array and reverse the order of the elements. Again, the original array will not be affected.

#### `sort()` -

#### `concat()` -
Creates a new array based on the elements in the current array. It's important to know that the original array is not altered. The operation is made on the copy of that array. ` concat()` accepts any number of arguments which will be added at the end of the array. Using it without arguments is a elegent way to clone the initial array.
```
var arr = [true, 2, 3, "4"];
new_array = arr.concat(5, 6, 7)
console.log(new_array);         // [true, 2, 3, "4", 5, 6, 7]
```

#### `slice()`
Similar to `concat()`, slice creates a copy of the array and extracts a subsequence of it. Used with no parameters, it returns a copy of the original. With one argument - index -, returns all elements from that index to the end. Additionally, it can be used with 2 arguments - start_index and end_index, in which case it will return all elements in that interval (excluding the one from last_index).

The function can be used with a negative value as parameter. In this case, the start index will be counted from the end of the array - start_index = array.length - param

```
var arr = [true, 2, 3, "4"];
new_array = arr.slice(0, 2);
console.log(new_array);         // [true, 2]

```
#### `splice()` -
`Splice()` has very similar use cases like `concat()` and `splice()`, the only difference is that
***the operation is made on the original array.

It's a destructive method, you won't be able to revert it, so be careful to that when using it.

It can take more arguments splice(start_index, number_of_deleted_items, element1, element2, .... elementN). In this case, starting from start_index, it will delete the number of items specified on the second argument. The elements element1, element2..elementN will be added, in this order to the array. Basically, you replace a number of items with the elements you provide.

The function returns an array with the deleted items.

You can adapt the behavior as you wish. For example splice(start_index, number_of_deleted_items) for deleting elements or splice(start_index, 0, item_to_insert) for inserting without deleting.

```
var arr = [true, 2, 3, "4"];
arr.splice(0, 1, 1); // I replace the first item with 1
console.log(arr);                // [1, 2, 3, "4"]

````
```
