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
    this.insertAt(data, 0);
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
    return this.getAt(0);
  }

  getLast() {
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.removeAt(0);
  }

  removeLast() {
    this.removeAt(this.size() - 1);
  }

  insertLast(data) {
    this.insertAt(data, this.size());
  }

  getAt(index) {
    if (index > this.size - 1) {
      return null;
    }

    let node = this.head;
    let curIdx = 0;
    while (node && curIdx < index) {
      node = node.next;
      curIdx++;
    }

    return node;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
    }

    let preNode = this.getAt(index-1);
    let curNode = this.getAt(index);
    if (preNode && curNode) {
      preNode.next = curNode.next;
    }
  }

  insertAt(data, index) {
    let node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }

    if (index >= this.size() - 1) {
      let lastNode = this.getLast();
      lastNode.next = node;
      return;
    }

    node.next = this.getAt(index);
    this.getAt(index-1).next = node;

    return;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  // forEach(fn) {
  //   for (let i = 0; i < this.size(); i++) {
  //     fn(this.getAt(i), i);
  //   }
  // }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
