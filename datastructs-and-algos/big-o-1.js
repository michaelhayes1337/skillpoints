const getFirst = (array) => {
  return array[0];
};

//O(1)
const firstItem = getFirst([1, 2, 3]);
console.log(firstItem);

//                  |
//                  |
//                  |
//                  |
//                  |
//                  |
//                  |
//                  |
//  Operations      |
//                  |
//                  |
//                  |
//                  |
//                  |
//                  |
//                  |
//                  |
//                -----------------------------------------------------------
//                  |
//                  |
//                ------------------------------------------------------------
//                  |
//                                  Array size
