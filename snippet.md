```
const adrian = {
  fullName: 'Adrian Oprea',
  occupation: 'Software developer',
  age: 31,
  website: 'https://oprea.rocks'
};

const bill1 = {
  ...adrian,
  fullName: 'Bill Gates',
  website: 'https://microsoft.com'
};

const bill2 = {
  fullName: 'Bill Gates',
  website: 'https://microsoft.com',
  ...adrian
};

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [ ...numbers1, 1, 2, 6,7,8]

const numbers3 = new Set(numbers2)

[...numbers3]
```

```
function sum(...numbers) {
	return numbers.reduce((accumulator, current) => {
		return accumulator += current;
	});
};

function sum(...numbers) {
	let final = 0
	for(let i in numbers){
		final = numbers[i] + final }
	return final
};

sum(1,2) // 3
sum(1,2,3,4,5) // 15
```
- reference https://oprea.rocks/blog/what-do-the-three-dots-mean-in-javascript/




- fizzbuzz
```
for(let i =0 ; i < 101; i++) {
	if( i % 3 === 0 ) {
		 console.log('fizz', i)}
	if (i % 5 === 0) {
		console.log('bizz', i)}
	if (i % 3 === 0 && i % 5 === 0) {
		console.log('fizzbuzz', i)}
	if (! i % 3 === 0 || ! i % 5 === 0) {
		console.log(i)}
}
```


### JavaScript variable number of arguments to function
```
Sure, just use the arguments object.

function foo() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}


In Recent browsers, you can accept variable number of arguments with this syntax:

function my_log(...args) {
     //args is an Array
     console.log(args);
     //You can pass this array as parameters to another function
     console.log(...args);
}
```


### Checking android device or ios

```
let andoidURL = (navigator && navigator.platform && (navigator.platform.toUpperCase().indexOf('ARM') > -1) ) ? "https://www.gamezy.com/gamezyapp" : false;

let iosURL = (navigator && navigator.platform && (navigator.platform.toUpperCase().indexOf('IPHONE') > -1) ) ? "https://apps.apple.com/us/app/gamezy-fantasy-cricket/id1490415018?ls=1" : false;

let shoudLinkShow = !!iosURL || !!andoidURL;

let downloadAppUrl = andoidURL ? andoidURL : iosURL;
	
	
	
render return

{shoudLinkShow ? <li><a target="_blank" href={downloadAppUrl}>Download App</a></li> : false}
```
