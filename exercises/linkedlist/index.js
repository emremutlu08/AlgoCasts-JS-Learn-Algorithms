// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // Create a new node and assign previous head as next to the new Node()
    const node = new Node(data, this.head);
    // Assign created node as a new head.
    this.head = node;
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    let firstNode = this.head;

    return firstNode;
  }

  getLast() {
    let node = this.head;
    let lastNode = this.head;

    while (node) {
      lastNode = node;
      node = node.next;
    }
    return lastNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previousNodeRef = this.head;
    let node = this.head.next;

    while (node.next) {
      previousNodeRef = node;
      node = node.next;
    }
    previousNodeRef.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // There are some existing nodes in our chain
      last.next = new Node(data);
    } else {
      // The chain is empty!
      this.head = new Node(data);
    }
  }
}

module.exports = { Node, LinkedList };
