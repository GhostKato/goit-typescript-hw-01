function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const objA = { name: 'Ann', age: 18 };
const objB = { city: 'Odessa', occupation: 'Engineer' };

const mergedObject = merge(objA, objB);

console.log(mergedObject);
