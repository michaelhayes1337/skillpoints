function mergeSortedArrays(a1, a2) {
  let idxa1 = 0;
  let idxa2 = 0;
  const mergedSize = a1.length + a2.length;
  const mergedArray = [];
  for (let i = 0; i < mergedSize; i++) {
    const canTake1 = idxa1 <= a1.length - 1;
    const canTake2 = idxa2 <= a2.length - 1;
    if (canTake1 && !canTake2) {
      mergedArray.push(a1[idxa1]);
      idxa1++;
    }
    if (!canTake1 && canTake2) {
      mergedArray.push(a2[idxa2]);
      idxa2++;
    }
    if (canTake1 && canTake2) {
      const is1Smaller = a1[idxa1] <= a2[idxa2];
      if (is1Smaller) {
        mergedArray.push(a1[idxa1]);
        idxa1++;
      } else {
        mergedArray.push(a2[idxa2]);
        idxa2++;
      }
    }
  }
  return mergedArray;
}

const res = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
console.log(res);
