// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  stack1 = new Stack();
  stack2 = new Stack();

  enqueue(item) {
    this.Stack1.push(item);
  }

  dequeue() {
    while (this.stack1.length > 0) {
      this.stack2.push(stack1.pop());
    }
    return this.stack2.pop();
  }
}

module.exports = Queue;
