# filter() on array
 If i have a simple array a=[1,2,3,4]
 i want to make a function by which i can filter this array like only
 the numbers which are bigger than 2 can stay others will out
 
 ## simple approch i can think of is below
```
 var arr = [1, 2, 3, 4];
 
 function pupu(ar){
             w=[];
             for(i=0;i<ar.length;i++){
                                      if(arr[i]>2){
                                                   w.push(ar[i])}}
             return w;
             console.log(w)}
            
pupu(arr); // [3, 4]

```

but this problem can be solved by filter very easily watch

```

 var arr = [1, 2, 3, 4];
 function new_pupu(number){
           return number > 2;}
           
arr.filter(new_pupu); // [3, 4]

```

> Challenge
```
var arr = []
arr[0] = 0
arr["one"] = 1
arr["2"] = 2
arr.length = ?

// ans: 3
```
