import LinkedList, { INode } from "./linkedList";

const myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.append(6);
myLinkedList.append(7);

function solution(
  head: INode = myLinkedList.head,
  m: number = 3,
  n: number = 5
) {
  let currentNode: INode = head,
    currentPosition: number = 1,
    start: INode = null;

  while (currentPosition < m) {
    start = currentNode;
    currentNode = currentNode.next;
    currentPosition++;
  }

  let tail: INode = currentNode,
    newList: INode = null;

  while (currentPosition >= m && currentPosition <= n) {
    const next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;
    currentPosition++;
  }

  if (start) start.next = newList;

  if (tail) tail.next = currentNode;

  return m > 1 ? head : newList;
}

console.log(solution());
