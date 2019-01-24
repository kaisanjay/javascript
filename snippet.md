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
