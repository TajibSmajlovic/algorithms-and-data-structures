export interface IListNode<T> {
  value: T;
  prev: IListNode<T>;
  next: IListNode<T>;
  children: IListNode<T>;
}

class ListNode<T> implements IListNode<T> {
  value: T;
  prev: IListNode<T>;
  next: IListNode<T>;
  children: IListNode<T>;

  constructor(value: T) {
    this.value = value;
    this.prev = null;
    this.next = null;
    this.children = null;
  }
}

export default class DoublyLinkedList<T> {
  head: IListNode<T>;
  tail: IListNode<T>;
  length: number;

  constructor(value: T) {
    this.head = new ListNode<T>(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value: T) {
    const node = new ListNode<T>(value);

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;

    return this;
  }

  prepend(value: T) {
    const node = new ListNode<T>(value);

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.length++;

    return this;
  }

  addChildren(index: number, children: IListNode<T>) {
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
