class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
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

  delete(value) {
    if (this.isEmpty()) return;

    if (!this.isEmpty() && !value) {
      this.size--;
      return (this.head = this.head.next);
    }

    if (this.head.value === value) {
      this.size--;
      return (this.head = this.head.next);
    }

    let curr = this.head;

    while (curr) {
      if (curr.next.value === value) {
        this.size--;
        return (curr.next = curr.next.next);
      }
      curr = curr.next;
    }
  }

  deleteFrom(position) {
    if (this.isEmpty()) return;

    if (position >= this.size) return;

    if (position === 0 || !position) {
      this.size--;
      return (this.head = this.head.next);
    }

    let curr = this.head;

    for (let i = 1; i < position; i++) {
      curr = curr.next;
    }

    curr.next = curr.next.next;
    this.size--;
  }

  findIndex(value) {
    if (this.isEmpty() || !value) return console.log(-1);
    let i = 0;
    let curr = this.head;

    while (curr) {
      if (curr.value === value) return console.log(i);
      curr = curr.next;
      i++;
    }

    return console.log(-1);
  }

  reverse() {
    let curr = this.head;
    let next = null;

    while (curr) {
      const prev = curr.next;

      if (prev === null) {
        this.head = curr;
      }
      curr.next = next;
      next = curr;

      curr = prev;
    }
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
