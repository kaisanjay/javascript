```
// Name Export | Name Import
export const name = 'value'
import { name } from '...'
// Default Export | Default Import
export default 'value'
import anyName from '...'
// Rename Export | NameImport
export { name as newName }
import { newName } from '...'
// Name + Default | Import All
export const name = 'value'
export default 'value'
import * as anyName from '...'
// Export List + Rename | Import List + Rename
export {
  name1,
  name2 as newName2
}
import {
  name1 as newName1,
  newName2
} from '...'
```

- ES2015 introduces a way to define and consume components right into the language, 
which was previously possible only with third-party libraries.
You can have separate files with the functionality you want, and export just 
certain parts to make them available to your application.
```
// lib/math.js
export function sum(x, y) {
  return x + y;
}
export const pi = 3.141593;

```

- Here we have a module that exports a function and a variable.
We can include that file in another one and use those exported functions:

```
// app.js
import * as math from "lib/math";
console.log("2π = " + math.sum(math.pi, math.pi));
```

- Or we can also be specific and import only what we need:

```
 // otherApp.js
 import {sum, pi} from "lib/math";
console.log("2π = " + sum(pi, pi));
```


- ref `https://medium.com/dailyjs/javascript-module-cheatsheet-7bd474f1d829`
