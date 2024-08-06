//log all pairs
const input = ["a", "b", "c"];

const logPairs = (input) => {
  // O(n^2)
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      console.log(input[i], input[j]);
    }
  }
};

logPairs(input);
