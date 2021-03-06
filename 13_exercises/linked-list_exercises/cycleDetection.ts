import floydsAlgorithm from "./floydsTortoiseAndHareAlgorithm";
import { INode, ListNode } from "./linkedList";

const nodeOne = new ListNode(1);
const nodeTwo = new ListNode(2);
const nodeThree = new ListNode(3);
const nodeFour = new ListNode(4);
const nodeFive = new ListNode(5);

nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree;
nodeThree.next = nodeFour;
nodeFour.next = nodeFive;
nodeFive.next = nodeOne;

function naiveSolution(head: INode = nodeOne): INode | boolean {
  const seenNodes = new Set();
  let currentNode = head;

  while (!seenNodes.has(currentNode)) {
    if (!currentNode?.next) return false;

    seenNodes.add(currentNode);
    currentNode = currentNode.next;
  }

  return currentNode;
}

console.log(naiveSolution());
console.log(floydsAlgorithm(nodeOne));
