**2. Output-Based Questions**

1. `console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");`
    
    **Question:** What will be the output? Explain why.


ans----------------
Start
End
Promise
Timeout
why------console.log("Start"); executes immediately and logs "Start".
console.log("End"); executes immediately and logs "End".
Promise.resolve().then(() => console.log("Promise")); schedules a micro-task to log "Promise".
setTimeout(() => console.log("Timeout"), 0); schedules a task to log "Timeout" after 0 milliseconds.


    
2. `let original = { a: 1, b: { c: 2 } };
let shallowCopy = { ...original };
shallowCopy.b.c = 3;
console.log(original.b.c);`
    
    **Question:** What will be the output? Explain why shallow copy behaves this way.

ans--- 
3
why-----------{ ...original } creates a shallow copy of original. This means that shallowCopy.b points to the same nested object as original.b.
Changing shallowCopy.b.c to 3 also changes original.b.c because both shallowCopy.b and original.b reference the same object.
    
3. `for (var i = 1; i <= 3; i++) { setTimeout(() => console.log(i), 1000);
}
for (let j = 1; j <= 3; j++) { setTimeout(() => console.log(j), 1000);
}`
    
    **Question:** Explain the output difference between the two loops and why this behavior occurs with `var` and `let`.

ans-----
4
4
4
1
2
3
why---- var is function-scoped and its value is shared across all iterations of the loop. By the time the setTimeout callback executes, the loop has already completed, and i is 4.
let is block-scoped, creating a new binding for each iteration of the loop. Each setTimeout callback closes over a different j value.
Thus, the first loop logs 4 three times, and the second loop logs 1, 2, and 3.
    
4. `let obj1 = { a: 10 };
let obj2 = obj1;
obj2.a = 20;
console.log(obj1.a);`
    
    **Question:** What will be the output? Explain how JavaScript treats objects when assigned to another variable.
    

ans---- 
20
how? -----------------
obj1 is an object with a property a set to 10.
obj2 is assigned the reference to the same object as obj1.
Modifying obj2.a to 20 affects obj1.a because both obj1 and obj2 reference the same object.

---END-----------------------------------------------------------------------------------------------

