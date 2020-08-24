// If you know a solution is not far from the root of the tree: BFS
// If the tree is very deep and solutions are rare: BFS
// If the tree is very wide: DFS
// If solutions are frequent but located deep in the tree: DFS
// Determining whether a path exists between two nodes: DFS
// Finding the shortest path: BFS

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new BinaryTreeNode(value);

    if (!this.root) return (this.root = newNode);

    let currentNode = this.root;

    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) return (currentNode.left = newNode);

        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) return (currentNode.right = newNode);

        currentNode = currentNode.right;
      }
    }
  }

  lookup(value) {
    if (!this.root) return false;
    if (value === this.root.value) return this.root;

    let currentNode = this.root;

    // while(true) {
    //     if(value <= currentNode.value) {
    //         if(value === currentNode.value) return currentNode

    //         currentNode = currentNode.left
    //     }
    //  else {
    //     if(!currentNode.right) return currentNode

    //     currentNode = currentNode.right
    //     }
    // }

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) return currentNode;
    }

    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  breadthFirstSearch() {
    let currentNode = this.root;
    const list = [];
    const queue = [];
    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();
      list.push(currentNode.value);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return list;
  }

  breadthFirstSearchRecursive(queue = [this.root], list = []) {
    if (!queue.length) return list;

    let currentNode = queue.shift();
    list.push(currentNode.value);

    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);

    return this.breadthFirstSearchRecursive(queue, list);
  }

  depthFirstSearchInOrder(node = this.root, list = []) {
    if (node.left) this.depthFirstSearchInOrder(node.left, list);

    list.push(node.value);

    if (node.right) this.depthFirstSearchInOrder(node.right, list);

    return list;
  }

  depthFirstSearchPreOrder(node = this.root, list = []) {
    list.push(node.value);

    if (node.left) this.depthFirstSearchPreOrder(node.left, list);
    if (node.right) this.depthFirstSearchPreOrder(node.right, list);

    return list;
  }

  depthFirstSearchPostOrder(node = this.root, list = []) {
    if (node.left) this.depthFirstSearchPostOrder(node.left, list);
    if (node.right) this.depthFirstSearchPostOrder(node.right, list);

    list.push(node.value);

    return list;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.insert(111);
tree.insert(58);
// tree.remove(4);
tree.breadthFirstSearch();
console.log(tree.breadthFirstSearchRecursive());
console.log(tree.depthFirstSearchInOrder());
console.log(tree.depthFirstSearchPreOrder());
console.log(tree.depthFirstSearchPostOrder());
