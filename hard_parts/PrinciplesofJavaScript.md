### What do you mean by global execution context in js world?
In JavaScript, the global execution context refers to the initial environment in which your code is executed. It represents the outermost scope of your JavaScript program. When the JavaScript engine starts running your code, it creates a global execution context that consists of two main components: the global object and the global scope.

The global object, often referred to as window in a browser environment, serves as the global namespace for your JavaScript code. It provides access to built-in functions, variables, and objects, such as console, setTimeout, and Math, among others. Any variables or functions declared in the global scope become properties or methods of the global object.

The global scope defines the accessibility and visibility of variables and functions throughout your program. Variables and functions declared outside of any function or block are automatically attached to the global scope. This means they can be accessed and used from any part of your code.

The global execution context sets up the initial environment for your code to run, initializing the global object and setting up the global scope. As your code executes, additional execution contexts may be created for functions or blocks, forming a hierarchical structure known as the execution stack.

Understanding the global execution context is crucial as it helps you comprehend how variables, functions, and objects are scoped and accessed in your JavaScript program.
