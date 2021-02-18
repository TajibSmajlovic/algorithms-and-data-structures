export interface IListNode {
  value: number;
  prev: IListNode;
  next: IListNode;
  children: IListNode;
}

class ListNode implements IListNode {
  value: number;
  prev: IListNode;
  next: IListNode;
  children: IListNode;

  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
    this.children = null;
  }
}

export default class DoublyLinkedList {
  head: IListNode;
  tail: IListNode;
  length: number;

  constructor(value) {
    this.head = new ListNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = new ListNode(value);

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;

    return this;
  }

  prepend(value) {
    const node = new ListNode(value);

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.length++;

    return this;
  }

  addChildren(index: number, children: IListNode) {
    // TODO:
    /// add guards

    const leadNode = this.traverseToIndex(index - 1);
    leadNode.children = children;

    return this;
  }

  traverseToIndex(index) {
    // TODO:
    /// add guards

    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
}
