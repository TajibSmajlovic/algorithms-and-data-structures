export interface INode<T> {
  value: T;
  next: INode<T>;
}

export class ListNode<T> implements INode<T> {
  value: T;
  next: INode<T>;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkedList<T> {
  head: INode<T>;
  tail: INode<T>;
  length: number;

  constructor(value: T) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value: T) {
    const node = new ListNode<T>(value);

    this.tail.next = node;
    this.tail = node;
    this.length++;

    return this;
  }
}
