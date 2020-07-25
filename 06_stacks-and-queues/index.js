class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

// STACK (Linked list)
// class Stack {
//     constructor() {
//         this.top = null
//         this.bottom = null
//         this.length = 0
//     }

//     peek() {
//         return this.top
//     }

//     push(value) {
//         const node = new Node(value)

//         if(!this.length) {
//             this.top = node
//             this.bottom = node
//         } else {
//             const top = this.top

//             this.top = node
//             this.top.next = top
//         }

//         this.length++
//     }

//     pop() {
//         if(!this.top) return
//         if(this.bottom === this.top) this.bottom = null

//         this.top = this.top.next
//         this.length--
//     }

//     isEmpty() {
//         return this.length === 0 ? true : false
//     }
// }

// const myStack = new Stack()
// myStack.isEmpty()
// myStack.push(12)
// myStack.push(122)
// myStack.push(1222)
// myStack.pop()
// myStack.isEmpty()

// STACK (Array)
// class Stack {
//     constructor() {
//         this.stack = []
//     }

//     peek() {
//         return this.stack[this.stack.length - 1]
//     }

//     push(value) {
//         this.stack.push(value)
//     }

//     pop() {
//         if(!this.stack.length) return

//         this.stack.pop()
//     }

//     isEmpty() {
//         return !this.stack.length
//     }
// }

// const myStack = new Stack()
// myStack.isEmpty()
// myStack.push(12)
// myStack.push(122)
// myStack.push(1222)
// myStack.pop()
// myStack.isEmpty()

// // STACK (Linked list)
// class Queue {
//     constructor() {
//         this.first = null
//         this.last = null
//         this.length = 0
//     }

//     peek() {
//         return this.first
//     }

//     enqueue(value) {
//         const node = new Node(value)

//         if(!this.length) {
//             this.first = node
//             this.last = node
//         } else {
//             this.last.next = node
//             this.last = node
//         }

//         this.length++
//     }

//     dequeue() {
//         if(this.first) {
//             this.first = this.first.next
//             this.length--
//         }

//         return null

//     }

//     isEmpty() {
//         return !this.length
//     }
// }

// const myQueue = new Queue()
// myQueue.enqueue(2)
// myQueue.enqueue(22)
// myQueue.enqueue(211)
// myQueue.peek()
// myQueue.dequeue()


// Queue using Stacks
class Stack {
    constructor() {
        this.stack = []
    }

    peek() {
        return this.stack[this.stack.length - 1]
    }

    push(value) {
        this.stack.push(value)
    }

    pop() {
        if(!this.stack.length) return

        this.stack.pop()
    }

    isEmpty() {
        return !this.stack.length
    }
}

class CrazyQueue {
    constructor() {
      this.queue = new Stack()
    }
  
    enqueue(value) {
      this.queue.stack.push(value)
      // const length = this.first.length;

      // for (let i = 0; i < length; i++) {
      //   this.last.push(this.first.pop());
      // }

      // this.last.push(value);
      // return this;
    }
  
    dequeue() {
      this.queue.stack.shift()
      // const length = this.last.length;

      // for (let i = 0; i < length; i++) {
      //   this.first.push(this.last.pop());
      // }

      // this.first.pop();
      // return this;
    }
    peek() {
      return this.queue.stack[0]
    }
  }
  
  const myQueue = new CrazyQueue();
   myQueue.peek();
   myQueue.enqueue('Joy');
   myQueue.enqueue('Matt');
   myQueue.enqueue('Pavel');
   myQueue.peek();
   myQueue.dequeue();
   myQueue.dequeue();
   myQueue.dequeue();
   myQueue.peek();

  console.log(myQueue)