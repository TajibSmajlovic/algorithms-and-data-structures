export interface INode {
  value: number;
  next: INode;
}

export class ListNode implements INode {
  value: number;
  next: INode;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkedList {
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
