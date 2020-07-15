class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const node = new Node(value)

        this.tail.next = node
        this.tail = node
        this.length++

        return this
    }

    prepend(value) {
       const node = new Node(value)

       node.next = this.head
       this.head = node
       this.length++

       return this
    }

    insert(index, value) {
        // guards
        if(index >= this.length) return this.append(value)

        let newNode = new Node(value)
        let leadNode = this.traverseToIndex(index - 1)
        let nextNode = leadNode.next

        leadNode.next = newNode
        newNode.next = nextNode
        this.length++

        return this.printList()
    }

    remove(index) {
        // add guards

        let leadNode = this.traverseToIndex(index - 1)
        let nodeToRemove = leadNode.next

        leadNode.next = nodeToRemove.next
        this.length--

        return this.printList()
    }

    traverseToIndex(index) {
        // add guards

        let counter = 0
        let currentNode = this.head

        while(counter !== index) {
            currentNode = currentNode.next
            counter++
        }

        return currentNode
    }

    printList() {
        const arr = []
        let node = this.head

        while (node !== null) {
            arr.push(node.value)
            node = node.next
        }

        return arr
    }

    reverse() {
        if(!this.head.next) return this.head

        let first = this.head
        this.tail = this.head
        let second = first.next

        while(second) {
            const temp = second.next

            second.next = first
            first = second
            second = temp
        }

        this.head.next = null
        this.head = first
    }
}

const myLinkedList = new LinkedList(5)
myLinkedList.append(6)
myLinkedList.prepend(16)
console.log(myLinkedList.printList())
myLinkedList.reverse()
console.log(myLinkedList.printList())


// class Node {
//     constructor(value) {
//         this.value = value
//         this.prev = null
//         this.next = null
//     }
// }

// class DoublyLinkedList {
//     constructor(value) {
//         this.head = new Node(value)
//         this.tail = this.head
//         this.length = 1
//     }

//     append(value) {
//         const node = new Node(value)

//         node.prev = this.tail
//         this.tail.next = node
//         this.tail = node
//         this.length++

//         return this
//     }

//     prepend(value) {
//        const node = new Node(value)

//        node.next = this.head
//        this.head.prev = node
//        this.head = node
//        this.length++

//        return this
//     }

//     insert(index, value) {
//         // guards
//         if(index >= this.length) return this.append(value)

//         let newNode = new Node(value)
//         let leadNode = this.traverseToIndex(index - 1)
//         let nextNode = leadNode.next

//         leadNode.next = newNode
//         newNode.prev = leadNode
//         newNode.next = nextNode
//         nextNode.prev = newNode
//         this.length++

//         return this.printList()
//     }

//     remove(index) {
//         // add guards

//         let leadNode = this.traverseToIndex(index - 1)
//         let nodeToRemove = leadNode.next

//         leadNode.next = nodeToRemove.next
//         nodeToRemove.next.prev = leadNode
//         this.length--

//         return this.printList()
//     }

//     traverseToIndex(index) {
//         // add guards

//         let counter = 0
//         let currentNode = this.head

//         while(counter !== index) {
//             currentNode = currentNode.next
//             counter++
//         }

//         return currentNode
//     }

//     printList() {
//         const arr = []
//         let node = this.head

//         while (node !== null) {
//             arr.push(node.value)
//             node = node.next
//         }

//         return arr
//     }
// }

// const myLinkedList = new DoublyLinkedList(5)
// myLinkedList.append(6)
// myLinkedList.append(61)
// myLinkedList.prepend(16)
// myLinkedList.insert(2, 66)
// console.log(myLinkedList.printList())
// myLinkedList.remove(2)
// console.log(myLinkedList.printList())