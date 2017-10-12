/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Adds a new Tree node with the input value to the current Tree node
  addChild(value) {
    const node = {
      value,
      left: null,
      right: null,
    };
    let current;

    if (this.root === null) {
      this.root = node;
    } else {
      current = this.root;

      while(true) {
        if(value < current.value) {
          if(currnet.left === null) {
          current.left = node;
          break;
        } else {
          current = current.left;
        };
      } else if (value > current.value) {
        if(current.right === null) {
          current.right = node;
          break;
        } else {
          current = current.right;
        }
      } else {
        break;
        }
      }
    }
  }
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) {

  }
}

module.exports = Tree;
