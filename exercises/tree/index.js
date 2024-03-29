// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    const node = new Node(data);
    this.children.push(node);
  }

  remove(data) {
    this.children = this.children.filter((node) => node.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  // Breadth First Search
  // The purpose of this function is to traverse the tree in a breadth first manner
  traverseBF(fn) {
    // We created arr to store the nodes
    const arr = [this.root];

    // We loop through the array
    // The purpose of this loop is to push the children of the node to the array
    while (arr.length) {
      // We shift the first element of the array
      const node = arr.shift();

      // We push the children of the node to the array
      arr.push(...node.children);
      // We call the function with the node
      fn(node);
    }
  }

  // Depth First Search
  traverseDF(fn) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();

      arr.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = { Tree, Node };
