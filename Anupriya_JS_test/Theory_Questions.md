. Theory Questions:**

- Explain the concept of closures in JavaScript. Provide a use-case where closures are beneficial.
ans- Closures in JavaScript are a fundamental concept that allows a function to access variables from an outer function's scope, even after that outer function has returned. This is possible because functions in JavaScript form closures around the scope in which they were declared, preserving the environment in which they were created.

Use-case for closures:

A common use-case for closures is in implementing private variables. 

- Describe the differences between var, let, and const in JavaScript, focusing on hoisting and scope.

ans- var-------------

Scope: Function-scoped, meaning it is accessible within the function it is declared.
Hoisting: Variables declared with var are hoisted to the top of their scope.the initialization remains in place.

let--------------
Scope: Block-scoped, meaning it is accessible within the block it is declared.
Hoisting: Variables declared with let are hoisted, but not initialized.

const---------------
Scope: Block-scoped, similar to let.
Hoisting: Variables declared with const are hoisted, but not initialized. Accessing them before declaration results in a ReferenceError.

- What are the differences between a programming language and a scripting language? Where does JavaScript fit in?
ans--
Programming Language:-----------------------------------

1--Designed to build standalone applications.
2--Typically compiled to machine code for execution.
Examples: C, C++, Java

Scripting Language:----------------------------------
1-- Designed to automate tasks or manipulate existing systems.
2-- Generally interpreted rather than compiled, executed line-by-line
Examples: JavaScript, Python, Ruby
