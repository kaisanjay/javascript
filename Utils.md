
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

- How to get the first element of an array?
Better way to get the first element without jQuery: 
```
Element of index 0 may not exist if the first element has been deleted:
function first(p) {
  for (let i in p) return p[i];
}

console.log( first(['a', 'b', 'c']) );

Using ES6 destructuring
let [first] = [1,2,3];

Which is the same as

let first = [1,2,3][0];
```

- if you don't need to pass arguments to function, just remove () from function like below:
`<td><span onClick={this.toggle}>Details</span></td>`

- but if you want to pass arguments, you should do like below:
`<td><span onClick={(e) => this.toggle(e,arg1,arg2)}>Details</span></td>`

more readable
```
const completed = todo.completed ? " strike-through" : "";
const priority = todo.priority === 1 ? "alert alert-info" : (todo.priority === 2 ? "alert alert-warning" : "alert alert-danger");
...
<li className={`list-group-item ${completed} ${priority}`} />
```

#### Destructuring

```
const turtle = {
    name: 'Bob 🐢',
    legs: 4,
    shell: true, 
    type: 'amphibious',
    meal: 10,
    diet: 'berries'
}
```

'Bad Code 💩'
```
function feed(animal) {
    return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`;
}
```


'Good Code ✅'
```
function feed({ name, meal, diet }) {
    return `Feed ${name} ${meal} kilos of ${diet}`;
}

// OR

function feed(animal) {
    const { name, meal, diet } = animal;
    return `Feed ${name} ${meal} kilos of ${diet}`;
}



console.log(feed(turtle))
```

#### spread-syntax

// Objects

```
const pikachu = { name: 'Pikachu 🐹'  };
const stats = { hp: 40, attack: 60, defense: 45 }
```
'Bad Object Code 💩'
```
pikachu['hp'] = stats.hp
pikachu['attack'] = stats.attack
pikachu['defense'] = stats.defense

// OR

const lvl0 = Object.assign(pikachu, stats)
const lvl1 = Object.assign(pikachu, { hp: 45 })
```
'Good Object Code ✅'
```
const lvl0 = { ...pikachu, ...stats }
const lvl1 = { ...pikachu, hp: 45 }
```

// Arrays
```
let pokemon = ['Arbok', 'Raichu', 'Sandshrew'];
```
'Bad Array Code 💩'
```
pokemon.push('Bulbasaur')
pokemon.push('Metapod')
pokemon.push('Weedle')
```
'Good Array Code ✅'
```
// Push 
pokemon = [...pokemon, 'Bulbasaur', 'Metapod', 'Weedle']

// Shift

pokemon = ['Bulbasaur', ...pokemon, 'Metapod', 'Weedle', ]
```

#### template-literals

```
const horse = {
    name: 'Topher 🐴',
    size: 'large',
    skills: ['jousting', 'racing'],
    age: 7
}
```
'Bad String Code 💩'
 ```
let bio = horse.name + ' is a ' + horse.size + ' horse skilled in ' + horse.skills.join(' & ')
```
'Good String Code ✅'
```
const { name, size, skills } = horse;
bio = `${name} is a ${size} horse skilled in ${skills.join(' & ')}`
console.log(bio);
```
// **Advanced Tag Example**

```
function horseAge(str, age) {
    
    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years`;
}

const bio2 = horseAge`This horse is ${horse.age}`;
console.log(bio2)
```

#### rest-params

'Bad Function Code 💩'
```
function totalHitPoints(a, b, c, d) {
    return a + b + c + d;
}
totalHitPoints(1,2,3,4,5,6,7,) //10 wrong
```
'Good Function Code ✅'

```
function totalHitPoints(...hits) {
    return hits.reduce((a, b) => a + b);
}

totalHitPoints(1,2,3,4,5,6,7,) // 28
```




###### note
```
let avlCTypes = [
 {contests: Array(5), nm: "JOIN_THIS", desc: null, img: null},
 {contests: Array(2), nm: "BONUS CONTEST", desc: null, img: null},
 {contests: Array(2), nm: "BONUSONLY", desc: null, img: null},
 {contests: Array(1), nm: "CORONABONUS", desc: null, img: null},
 {contests: Array(4), nm: "Mega Contest", desc: null, img: null},
 {contests: Array(3), nm: "Head 2 Head", desc: null, img: null},
 {contests: Array(1), nm: "GamezyLite", desc: null, img: null},
 {contests: Array(1), nm: "Daily Free Contests", desc: null, img: null} ]
let allFilters = [];
```

### note the boxbracket around the `item` when pushing to the `allFilters` without these box brackets they just act as key string like key which is static. if you want it to make dynamic you have to put box bracket around it 
```
for (const item in avlCTypes) {
            console.log(item, 'item')
            allFilters.push({ [item]: avlCTypes[item], isSelected: false });
            // note boxbracket
    }
    console.log(allFilters)
    
	    // [  {0_1: Array(8), isSelected: false},
		  {0_101: Array(2), isSelected: false},
		  {2_1: Array(3), isSelected: false},
		  {4_1: Array(1), isSelected: false}]

```

without bracket

```
for (const item in avlCTypes) {
            console.log(item, 'item')
            allFilters.push({ item: avlCTypes[item], isSelected: false });
            // note boxbracket
    }
    console.log(allFilters)
    
    [    {item: Array(8), isSelected: false},
	 {item: Array(2), isSelected: false},
	 {item: Array(3), isSelected: false},
	 {item: Array(1), isSelected: false} ]
	
```


