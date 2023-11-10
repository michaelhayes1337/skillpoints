const strings = ["a", "b", "c"];

const idxOne = strings[1]; // O(1)
strings.push("d"); // O(1) can be O(n) when memory needs to be adjusted for array size
strings.pop(); // O(1)

strings.unshift("x"); // O(n)
strings.splice(2, 0, "alien"); // O(n)

console.log(strings);
