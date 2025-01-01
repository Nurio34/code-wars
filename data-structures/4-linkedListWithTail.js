class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedListWithTail {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return console.log(this.size);
  }

  prepend(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  deleteFromStart() {
    if (this.isEmpty()) return console.log("List is empty");

    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return console.log(`${value}'s deleted`);
  }

  deleteFromEnd() {
    if (this.isEmpty()) return console.log("List is empty");

    let value;

    if (this.size === 1) {
      value = this.head.value;
      this.head = null;
      this.tail = null;
    }

    let curr = this.head;
    while (curr) {
      if (curr.next === this.tail) {
        value = curr.next.value;
        curr.next = null;
        this.tail = curr;
        break;
      }
      curr = curr.next;
    }
    this.size--;
    console.log(`${value}'s deleted`);
    value = null;
    curr = null;
    return;
  }

  delete(value) {
    if (this.isEmpty()) return console.log("List is empty");
    if (!value) return console.log("You must provide value as argument");
    if (this.head.value === value) {
      this.size--;
      return (this.head = this.head.next);
    }

    let curr = this.head;
    for (let i = 1; i < this.size; i++) {
      if (curr.next.value === value) {
        this.size--;
        return (curr.next = curr.next.next);
      }
      curr = curr.next;
    }
    curr = null;
    return console.log("Value's not found");
  }

  deleteFrom(index) {
    if (this.isEmpty()) return console.log("List is empty");

    if (index === 0) {
      this.size--;
      return (this.head = this.head.next);
    }

    if (!index) return console.log("You must provide index as argument");

    if (index >= this.size || index < 0)
      return console.log("Index's not found");

    let curr = this.head;
    for (let i = 0; i < this.size; i++) {
      if (i === index - 1) {
        curr.next = curr.next.next;
        if (curr.next === this.tail) {
          this.tail = curr;
        }
        curr = null;
        return this.size--;
      }
      curr = curr.next;
    }
  }

  findIndexOf(value) {
    let curr = this.head;
    let i = 0;
    while (curr) {
      if (curr.value === value) {
        console.log(i);
        i = null;
        curr = null;
        return;
      }
      i++;
      curr = curr.next;
    }

    return console.log(`${value}'s not found in list`);
  }

  findAt(index) {}

  reverse() {}

  print() {
    let list = ``;
    let curr = this.head;
    for (let i = 0; i < this.size; i++) {
      if (i === this.size - 1) {
        list += curr.value + "";
      } else {
        list += curr.value + ",";
      }

      curr = curr.next;
    }

    console.log(list);
  }
}

const list = new LinkedListWithTail();

list.prepend(2);
list.prepend(1);
list.append(3);
list.findIndexOf(11);
list.print();
