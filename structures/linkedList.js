class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    console.log(this.size);
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
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
    } else {
      let curr = this.head;

      while (true) {
        if (curr.next === null) {
          curr.next = node;
          break;
        }
        curr = curr.next;
      }
    }
    this.size++;
  }

  insert(value, position) {
    const node = new Node(value);

    if (this.isEmpty() || !position || position < 0) {
      this.prepend(value);
      return;
    }

    if (position > this.size) {
      this.append(value);
      return;
    }

    if (!this.isEmpty() && position) {
      let i = 0;
      let curr = this.head;
      while (true) {
        i++;
        if (position === i) {
          node.next = curr.next;
          curr.next = node;
          break;
        }
        curr = curr.next;
      }
    }

    this.size++;
  }

  print() {
    let curr = this.head;
    let list = ``;
    let ittr = 0;
    while (curr) {
      ittr++;
      if (ittr === this.size) {
        list += curr.value;
      } else {
        list += curr.value + ",";
      }

      curr = curr.next;
    }
    console.log(list);
  }
}

const list = new LinkedList();
list.prepend(10);
list.prepend(20);
list.prepend(3);
list.append(100);
list.prepend(1);
list.append(22);
list.insert("a", 2);
list.print();
