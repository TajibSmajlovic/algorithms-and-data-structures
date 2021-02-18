import DoublyLinkedList, { IListNode } from "./doublyLinkedList";

const myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.append(2);
myDoublyLinkedList.append(3);
myDoublyLinkedList.append(4);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(6);

const childrenList = new DoublyLinkedList(7);
childrenList.append(8);
childrenList.append(9);

const childrenSubList = new DoublyLinkedList(10);
childrenSubList.append(11);

const childrenList2 = new DoublyLinkedList(12);
childrenList2.append(13);

childrenList.addChildren(2, childrenSubList.head);
myDoublyLinkedList.addChildren(2, childrenList.head);
myDoublyLinkedList.addChildren(5, childrenList2.head);

console.log(myDoublyLinkedList);

function merge(currentNode: IListNode) {
  const children = currentNode.children;
  const next = currentNode.next;

  children.prev = currentNode;
  currentNode.next = children;

  let currentChild: IListNode = children;

  while (currentChild.next) {
    currentChild = currentChild.next;
  }

  if (next) next.prev = currentChild;

  currentChild.next = next;
  currentNode.children = null;
}

function solution(head: IListNode = myDoublyLinkedList.head) {
  if (!head) return head;
  let currentNode = head;

  while (currentNode) {
    if (currentNode.children) merge(currentNode);

    currentNode = currentNode.next;
  }

  return head;
}

console.log(solution());
