import { INode } from "./linkedList";

export default function floydsTortoiseAndHareAlgorithm(head: INode) {
  let hare = head,
    tortoise = head;

  while (true) {
    hare = hare.next;
    tortoise = tortoise.next;

    if (!hare || !tortoise) return false;

    hare = hare.next;

    if (tortoise === hare) break;
  }

  let p1 = head,
    p2 = tortoise;

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1 || p2;
}
