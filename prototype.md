# Prototype
***When you reference a property on an object, if that property doesn’t exist, JavaScript will automatically use that object’s internal prototype reference to find another object to look for the property on. You could think of this almost as a fallback if the property is missing***
The internal prototype reference linkage from one object to its fallback happens at the time the object is created. The simplest way to illustrate it is with a built-in utility called `Object.create(..)`.

consider:
```
var foo = {
    a: 42
};

// create `bar` and link it to `foo`
var bar = Object.create( foo );

bar.b = "hello world";

bar.b;      // "hello world"
bar.a;      // 42 <-- delegated to `foo`
```
The a property doesn’t actually exist on the bar object, but because bar is prototype-linked to foo, JavaScript automatically falls back to looking for a on the foo object, where it’s found.

This linkage may seem like a strange feature of the language. The most common way this feature is used—and I would argue, abused—is to try to emulate/fake a “class” mechanism with “inheritance.”

But a more natural way of applying prototypes is a pattern called “behavior delegation,” where you intentionally design your linked objects to be able to delegate from one to the other for parts of the needed behavior.
