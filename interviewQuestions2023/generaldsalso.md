### Given an Array and a key 'date', transform it into given output

```Given an array
[{
    "date": "JAN",
    "value": 5,
    "weight": 3
}, {
    "date": "JAN",
    "value": 4,
    "weight": 23
}, {
    "date": "FEB",
    "value": 9,
    "weight": 1
}, {
    "date": "FEB",
    "value": 10,
    "weight": 30
}]
and a key 'date' 
transform it into following output:
 [{
     "date": "JAN",
     "value": [5, 4],
     "weight": [3, 23]
 }, {
     "date": "FEB",
     "value": [9, 10],
     "weight": [1, 30]
 }]```


sol 1



```
function test() {
    data = [
    {"date": "JAN", "value": 5, "weight": 3},
    {"date": "JAN", "value": 4, "weight": 23},
    {"date": "FEB", "value": 9, "weight": 1},
    {"date": "FEB", "value": 10, "weight": 30}
]
 //    [{
 //     "date": "JAN",
 //     "value": [5, 4],
 //     "weight": [3, 23]
 // }, {
 //     "date": "FEB",
 //     "value": [9, 10],
 //     "weight": [1, 30]
 // }]

    const obj = {};

    data.forEach((item) => {
        if(!obj[item.date]) {
            obj[item.date] = {value: [item.value], weight:[item.weight]};
        } else {
            obj[item.date].value.push(item.value)
            obj[item.date].weight.push(item.weight)    
        }
        
    })

    const arr = Object.keys(obj);

    resArr = []

    arr.forEach(item => {
        const empObj = {date: item,...obj[item]}
        resArr.push(empObj)
    })

    
    console.log(resArr, 'hello')
}


var a = test()

console.log(a)```

### we can use only one loop for this solution 
- In JavaScript, objects are reference types. When you create a new object and store it in a variable, the variable actually holds a reference to the object in memory, rather than a copy of the object. This means that when you modify the object using the reference, the changes are reflected in the original object.
 In the solution I provided, we create a new object for each unique date in the dateMap and add it to the result array using the push() method. This means that the result array now contains a reference to each of these objects.

Later, when we push the value and weight properties for each item to the corresponding arrays in the dateMap, we are actually modifying the same objects that we added to the result array earlier. Since the result array holds references to these objects, the changes we make to the objects in the dateMap are reflected in the result array as well.

Therefore, we only need to loop over the data array once and update the dateMap and result array in the same loop. This way, we avoid the need for nested loops or additional processing steps.

sol 2

```
const data = [
  { date: "JAN", value: 5, weight: 3 },
  { date: "JAN", value: 4, weight: 23 },
  { date: "FEB", value: 9, weight: 1 },
  { date: "FEB", value: 10, weight: 30 }
];

const result = [];
const dateMap = {};

for (const item of data) {
  const { date, value, weight } = item;
  if (!dateMap[date]) {
    dateMap[date] = { date, value: [], weight: [] };
    result.push(dateMap[date]);
  }
  dateMap[date].value.push(value);
  dateMap[date].weight.push(weight);
}

console.log(result);```
