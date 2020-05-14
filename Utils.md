
```
const uniqBy = (object, key) => {

    // Declare a new array 
    let newArray = []; 
              
    // Declare an empty object 
    let uniqueObject = {}; 
      
    // Loop for the array elements 
    for (let i in object) { 

        // Extract the title 
        let objTitle = object[i][key]; 

        // Use the title as the index 
        uniqueObject[objTitle] = object[i]; 
    } 
      
    // Loop to push unique object into array 
    for (let i in uniqueObject) { 
        newArray.push(uniqueObject[i]); 
    }

    return newArray;
      
    // // Display the unique objects 
}
```
```
let books = [ 
    { title: "C++", author: "Bjarne" }, 
    { title: "Java", author: "James" }, 
    { title: "Python", author: "Guido" }, 
    { title: "Java", author: "James" }, 
]; 

uniqBy(books, 'title');
```

```
export const IsEqual = (value, other) => {
    // Get the value type
	var type = Object.prototype.toString.call(value);

	// If the two objects are not the same type, return false
	if (type !== Object.prototype.toString.call(other)) return false;

	// If items are not an object or array, return false
	if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

	// Compare the length of the length of the two items
	var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
	var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
	if (valueLen !== otherLen) return false;

	// Compare two items
	var compare = function (item1, item2) {

		// Get the object type
		var itemType = Object.prototype.toString.call(item1);

		// If an object or array, compare recursively
		if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
			if (!IsEqual(item1, item2)) return false;
		}

		// Otherwise, do a simple comparison
		else {

			// If the two items are not the same type, return false
			if (itemType !== Object.prototype.toString.call(item2)) return false;

			// Else if it's a function, convert to a string and compare
			// Otherwise, just compare
			if (itemType === '[object Function]') {
				if (item1.toString() !== item2.toString()) return false;
			} else {
				if (item1 !== item2) return false;
			}

		}
	};

	// Compare properties
	if (type === '[object Array]') {
		for (var i = 0; i < valueLen; i++) {
			if (compare(value[i], other[i]) === false) return false;
		}
	} else {
		for (var key in value) {
			if (value.hasOwnProperty(key)) {
				if (compare(value[key], other[key]) === false) return false;
			}
		}
	}

	// If nothing failed, return true
	return true;
};

```

- find the element/s in a collection that satisfies a condition.
```
const users = [
  { 'user': 'joey',  'age': 32 },
  { 'user': 'ross',    'age': 41 },
  { 'user': 'chandler', 'age': 39 }
]

// Native
users.find(function (o) { return o.age < 40; })

 // {user: "joey", age: 32}
 
 users.find(function (o) { return (o.age < 40 && o.user === 'joey') })
 
 //{user: "joey", age: 32}
```

- Multiple CSS conditional classes using React
dirty
```
<li className={`list-group-item ${todo.completed ? " strike-through" : ""} ${todo.priority === 1 ? "alert alert-info" : (todo.priority === 2 ? "alert alert-warning" : "alert alert-danger")}`} />
```

more readable
```
const completed = todo.completed ? " strike-through" : "";
const priority = todo.priority === 1 ? "alert alert-info" : (todo.priority === 2 ? "alert alert-warning" : "alert alert-danger");
...
<li className={`list-group-item ${completed} ${priority}`} />
```


