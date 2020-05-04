
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
