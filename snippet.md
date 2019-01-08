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
- reference https://oprea.rocks/blog/what-do-the-three-dots-mean-in-javascript/
