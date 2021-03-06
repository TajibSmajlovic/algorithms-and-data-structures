interface INode {
  value: number;
  next: INode;
}

class ListNode implements INode {
  value: number;
  next: INode;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: INode;
  tail: INode;
  length: number;

  constructor(value: number) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value: number) {
    const node = new ListNode(value);

    this.tail.next = node;
    this.tail = node;
    this.length++;

    return this;
  }
}
const myLinkedList = new LinkedList(5);
myLinkedList.append(6);
myLinkedList.append(7);
myLinkedList.append(8);
myLinkedList.append(9);

function reverseLinkedList(head: INode = myLinkedList.head) {
  let currentNode = head;
  let prev = null;

  while (currentNode) {
    let next = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = next;
  }

  console.log(prev);
}

reverseLinkedList();
