// add(value)	Inserts a unique element into the set.
// delete(value)	Removes an element from the set.
// has(value)	Checks if a set contains a specific element.
// clear()	Removes all elements from the set.
// size	Returns the number of elements in the set.
// keys()	Returns an iterator for keys (same as values() since Set has unique values).
// values()	Returns an iterator for values.
// entries()	Returns an iterator with [value, value] pairs (useful for compatibility with Map).

let mySet = new Set();
mySet.add("a");
mySet.add("b");
mySet.add("a"); //duplicate will not to be added
console.log(mySet);
console.log(mySet.size); //2
console.log(mySet.has("b")); //true
// console.log(mySet.clear()); //after this set will be empty object and size is 0
mySet.forEach((element) => {
  console.log(element); // a,b
});
console.log(mySet.delete("a")); // "a" will be removed
console.log(mySet); //Set(1) { 'b' }
console.log(mySet.entries());
