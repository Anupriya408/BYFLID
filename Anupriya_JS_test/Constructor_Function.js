// // Create a constructor function Person with a property name.
//  Add a method greet to its prototype that prints "Hello, <name>".
//   Test this with different instances.


function Person(name) {
    this.name = name;
  }
  
  // Adding greet method to the prototype of Person
  Person.prototype.greet = function() {
    console.log(`Hello, ${this.name}`);
  };
  
  // Creating instances and testing the greet method
  const person1 = new Person('Alice');
  const person2 = new Person('Bob');
  
  person1.greet(); // Output: Hello, Alice
  person2.greet(); // Output: Hello, Bob
  

  