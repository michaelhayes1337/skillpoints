function findNemo(array) {
  let t0 = performance.now();
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === "nemo") {
      //do something
    }
  }
  let t1 = performance.now();
  return t1 - t0;
}

const large = new Array(10000).fill("nemo");
const runs = [];

for (let index = 0; index < 6; index++) {
  const array = new Array(Math.pow(10, index)).fill("nemo");
  runs.push(findNemo(array));
}

console.log(runs);

//                  |
//                  |                                                          --
//                  |                                                       --/
//                  |                                                    --/
//                  |                                                ---/
//                  |                                             --/
//                  |                                          --/
//                  |                                       --/
//  Operations      |                                    --/
//                  |                                 --/
//                  |                             ---/
//                  |                          --/
//                  |                       --/
//                  |                    --/
//                  |                 --/
//                  |              --/
//                  |          ---/
//                  |       --/
//                  |    --/
//                  |  -/
//                ------------------------------------------------------------
//                  |
//                                  Array size
