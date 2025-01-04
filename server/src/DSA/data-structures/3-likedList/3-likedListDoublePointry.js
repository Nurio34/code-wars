class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class LinkedListDoublePointer {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.list = [];
  }

  isEmpty() {
    //! O(1)
    return this.size === 0;
  }

  append(value) {
    //! O(1)
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  prepend(value) {
    //! O(1)
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  insert(value, index) {
    const node = new Node(value);

    if (index <= 0 || !index) {
      return this.prepend(value); //! O(1)
    }

    if (index >= this.size) {
      return this.append(value); //! O(1)
    }

    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      //! O(n)
      curr = curr.next;
    }
    node.next = curr.next;
    node.prev = curr;
    curr.next.prev = node;
    curr.next = node;

    this.size++;
  }

  deleteFromStart() {
    //! O(1)
    if (this.isEmpty()) {
      console.log("List is empty");
      return null;
    }

    const value = this.head.value;
    if (this.head === this.tail) {
      this.head = this.tail = null;
      console.log("List is empty now !");
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
    console.log(`${value}'s deleted !`);

    return value;
  }

  deleteFromEnd() {
    //! O(1)
    if (this.isEmpty()) {
      console.log("List is empty");
      return null;
    }

    const value = this.tail.value;
    if (this.head === this.tail) {
      this.head = this.tail = null;
      console.log("List is empty now !");
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
    console.log(`${value}'s deleted !`);

    return value;
  }

  delete(value) {
    if (this.isEmpty()) {
      console.log("List is empty");
      return null;
    }

    if (this.head.value === value) {
      return this.deleteFromStart(); //! O(1)
    }

    if (this.tail.value === value) {
      return this.deleteFromEnd(); //! O(1)
    }

    let curr = this.head;

    while (curr !== null && curr.value !== value) {
      //! O(n)
      curr = curr.next;
    }

    if (curr === null) {
      console.log(`${value} not found in the list`);
      return null;
    }

    curr.prev.next = curr.next;
    if (curr.next) {
      curr.next.prev = curr.prev;
    }

    this.size--;
    console.log(`${value} has been deleted!`);
    return curr.value;
  }

  deleteFrom(index) {
    if (this.isEmpty()) {
      console.log("List is empty");
      return null;
    }

    if (index <= 0) {
      return this.deleteFromStart(); //! O(1)
    }

    if (index >= this.size - 1) {
      return this.deleteFromEnd(); //! O(1)
    }

    let curr = this.head.next;

    for (let i = 1; i < index; i++) {
      //! O(n)
      curr = curr.next;
    }

    const value = curr.value;
    curr.prev.next = curr.next;
    curr.next.prev = curr.prev;
    this.size--;
    console.log(`${value}'s deleted !`);
    return value;
  }

  reverse() {}

  getHead() {
    //! O(1)
    console.log(`${this.head.value} is head`);
    return this.head.value;
  }

  getTail() {
    //! O(1)
    console.log(`${this.tail.value} is tail`);
    return this.tail.value;
  }

  length() {
    console.log(this.size);

    return this.size;
  }

  getList() {
    //! O(n)
    let curr = this.head;

    while (curr) {
      this.list.push(curr.value);
      curr = curr.next;
    }
    return this.list;
  }

  print() {
    //! O(n)

    console.log(this.getList());
  }
}
