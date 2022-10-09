strings are Immutabile
```Javascript strings are immutable, they cannot be modified "in place" so you cannot modify a single character```
const s = 'hi';
const p = s;
`is time hi js naya location ke sath p banayega wo point in kar raha like array n object`
p[0] = 'u';
console.log(s, p)
s[0] = 'u';
 

arrays and object are not 

some array methods are destructive like push pop they modify original array,
and others are not for example slice, map, filter.</br>

take more ref of array methods in array.md


bcz arrays are not immutable bydefault<img width="353" alt="Screenshot 2022-10-09 at 8 16 00 PM" src="https://user-images.githubusercontent.com/16288226/194763315-f05c93ba-9939-47e4-bcde-fc8e54398305.png">


const o = [] </br>
*undefined* </br>
const y = [...o, 'ge', 'yu'] </br>
*undefined* </br>
o </br>
*[]* </br>
y </br>
*(2) ['ge', 'yu']* </br>
const t = o; </br>
*undefined* </br>

t.push('mutable') </br>
*1* `//push returns the length of array` </br> 
t </br>
*['mutable']* </br>
o </br>
*['mutable']* </br>
y</br>
*(2) ['ge', 'yu']* </br>

