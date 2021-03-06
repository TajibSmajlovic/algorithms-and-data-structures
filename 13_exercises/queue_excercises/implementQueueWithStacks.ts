import Stack, { IStack } from "../dataStructures/stack";

class QueueWithStack<T> {
  private in: IStack<T>;
  private out: IStack<T>;

  constructor() {
    this.in = new Stack<T>();
    this.out = new Stack<T>();
  }

  enqueue(value: T) {
    this.in.push(value);
  }

  dequeue() {
    if (!this.out.size()) {
      if (!this.in.size()) throw new Error("Queue empty!");

      while (this.in.size()) this.out.push(this.in.pop());
    }

    return this.out.pop();
  }

  peek() {
    if (!this.out.size()) {
      if (!this.in.size()) throw new Error("Queue empty!");

      while (this.in.size()) this.out.push(this.in.pop());
    }

    return this.out.get()[this.out.size() - 1]; // workaround to solve this exercise
  }

  empty() {
    return !this.in.size() && !this.out.size();
  }
}

const myQueueWithStack = new QueueWithStack<number>();
myQueueWithStack.enqueue(1);
myQueueWithStack.enqueue(2);
myQueueWithStack.enqueue(3);
myQueueWithStack.enqueue(4);

console.log(myQueueWithStack.dequeue());
console.log(myQueueWithStack.peek());

myQueueWithStack.enqueue(5);
myQueueWithStack.enqueue(6);

console.log(myQueueWithStack.peek());

myQueueWithStack.enqueue(7);

console.log(myQueueWithStack.dequeue());
console.log(myQueueWithStack.dequeue());
console.log(myQueueWithStack.dequeue());
console.log(myQueueWithStack.dequeue());
console.log(myQueueWithStack.dequeue());
console.log(myQueueWithStack.dequeue());
console.log(myQueueWithStack.empty());
