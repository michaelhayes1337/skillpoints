function reverseV1(s) {
  const copy = [...s];
  const size = s.length - 1;
  for (let i = size; i >= 0; i--) {
    s[size - i] = copy[i];
  }
}

function reverseV2(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
}

const s = ["h", "e", "l", "l", "o"];
reverseV1(s);
console.log(s);
