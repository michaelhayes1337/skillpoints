class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  //O(1)
  get(index) {
    if (this.length === 0) return null;
    return this.data[index];
  }
  //O(1)
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return item;
  }
  //O(n)
  pop() {
    if (this.length === 0) return null;
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  //O(n)
  delete(index) {
    delete this.data[index];
    this.leftShiftItems(index);
    delete this.data[this.length - 1];
  }
  //O(n)
  insert(index, value) {
    this.rightShiftItems(index);
    this.data[index] = value;
  }

  rightShiftItems(index) {
    for (let i = this.length - 1; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
  }
  leftShiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
  }
}

const arr = new MyArray();
arr.push("one");
arr.push("two");
arr.push("three");
arr.push("four");
arr.push("five");
arr.push("six");

arr.delete(2);
console.log(arr);
arr.insert(2, "three");

console.log(arr);
