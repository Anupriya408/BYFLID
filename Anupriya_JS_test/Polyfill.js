// q     Implement polyfills for reduce and filter in JavaScript.

// REDUCE//

// The reduce method executes a reducer function on each element of the array, resulting in a single output value.
if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function(callback, initialValue) {
      if (this == null) {
        throw new TypeError('Array.prototype.myReduce called on null or undefined');
      }
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }
  
      let accumulator = initialValue;
      let startIndex = 0;
  
      if (accumulator === undefined) {
        if (this.length === 0) {
          throw new TypeError('Reduce of empty array with no initial value');
        }
        accumulator = this[0];
        startIndex = 1;
      }
  
      for (let i = startIndex; i < this.length; i++) {
        if (i in this) {
          accumulator = callback(accumulator, this[i], i, this);
        }
      }
  
      return accumulator;
    };
  }
  
  const numbers = [1, 2, 3, 4];
  const sum = numbers.myReduce((acc, curr) => acc + curr, 0);
  console.log(sum); // Output: 10

  

//   FILTER ////////////////////////////////////////////////////////////////////////
if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function(callback, thisArg) {
      if (this == null) {
        throw new TypeError('Array.prototype.myFilter called on null or undefined');
      }
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }
  
      const result = [];
      for (let i = 0; i < this.length; i++) {
        if (i in this) {
          if (callback.call(thisArg, this[i], i, this)) {
            result.push(this[i]);
          }
        }
      }
  
      return result;
    };
  }
  
  const number = [1, 2, 3, 4, 5];
  const evenNumbers = number.myFilter(num => num % 2 === 0);
  console.log(evenNumbers); // Output: [2, 4]
  