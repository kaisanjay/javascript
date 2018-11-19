## Call Stack

![callstack](https://user-images.githubusercontent.com/16288226/48689298-cd5dfc80-ebef-11e8-8e04-a07c46fc5792.gif)

The call stack tracks functions that are currently active and are being processed.

### The call stack functions in the following way:

- When a function call is encountered, it is pushed onto the call stack.
- Any additional functions called within the original function are placed higher up onto the call stack.
- When a function finishes executing, it is popped off the call stack and the next function on the call stack is processed.

#### Notice how the call stack keeps track of the order of function calls:

```
function funcA(){
   funcB();  
}

function funcB(){
   funcC();
}

function funcC(){
    console.log(Error().stack); //Error is only used to show the call stack
}

funcA();

/*console output
"Error
    at funcC (example.js:15:17) <-- funcC is at the top of the callstack because it was called last
    at funcB (example.js:12:5)
    at funcA (example.js:9:5)   <-- funcA is at the bottom of the call stack because it was called first
    at example.js:17:1"
*/
```

What is Stack overflow??
```
function funcA(){
   funcA();  
}
funcA();
```

```
If the call stack grows too large and exceeds the amount of memory allocated, a Stack Overflow Error will occur. This commonly happens when a function calls itself recursively.
```


![eventloop](https://user-images.githubusercontent.com/16288226/48688912-2cbb0d00-ebee-11e8-9329-f814da3b21c4.gif)

The Event Queue is a queue that keeps track of tasks that are waiting to be put on the call stack to be executed. Tasks get added to the Event Queue by Web APIs that run in parallel with the JavaScript run time.

### Here are three examples of Web APIs that add tasks to the event queue:

- Timers - Timers schedule tasks to be added to the event queue 
- DOM Event Handlers - User Interactions such as mouse clicks and keyboard presses are handled by putting tasks on the event queue
- Network Requests - Network requests are processed asynchronously and send back results by putting tasks on the event queue 
