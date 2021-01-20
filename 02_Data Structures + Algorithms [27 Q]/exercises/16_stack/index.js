// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  push(item) {
    this.data[this.top] = item;
    this.top++;
  }

  pop() {
    if (this.isEmpty()) {
      return [];
    }
    this.top--;
    return this.data.pop();
  }

  isEmpty() {
    return this.top === 0;
  }

  peek() {
    return this.data[this.top - 1];
  }
}

module.exports = Stack;
