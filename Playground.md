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

# string reverse

```
function reverse(a){
	var b='';
	for(let i = a.length ; i>0; i--){
		b= `${b}${a[i-1]}`}
	return b;}
 ```
 
 > Question: Can you make reverse function as string extension?
 
 > Ans. 
 ```
 String.prototype.reverse = function reverse(){
						var b='';
						for(let i = this.length ; i>0; i--){
							b= `${b}${this[i-1]}`}
						return b;}
						
```
 
 
 # prime number true or false
 ```
 ```
 
function isPrime(n){
  var divisor = 2;

  while (n > divisor){
    if(n % divisor == 0){
     return false; 
    }
    else
      divisor++;
  }
  return true;
}
```

 
