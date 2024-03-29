/**
 * Launch School Exercises
 * JavaScript Challenges
 * Medium Challenges
 *
 * Simple Linked List
 *
 * https://launchschool.com/exercises/35a331cd
 */
"use strict";

class Element {
  #datum;
  #next;

  constructor(datum, next = null) {
    this.#datum = datum;
    this.#next = next;
  }

  datum() {
    return this.#datum;
  }

  next() {
    return this.#next;
  }

  isTail() {
    return this.next() === null;
  }
}

class SimpleLinkedList {
  #head;
  #size;

  constructor() {
    this.#head = null;
    this.#size = 0;
  }

  head() {
    return this.#head;
  }

  size() {
    return this.#size;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(datum) {
    let element = new Element(datum, this.#head);
    this.#head = element;
    this.#size += 1;
  }

  pop() {
    if (this.isEmpty()) return null;

    let result = this.#head.datum();
    this.#head = this.#head.next();
    this.#size -= 1;
    return result;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.#head.datum();
  }

  static fromArray(array) {
    let result = new SimpleLinkedList();
    if (array === null) return result;

    array.slice().reverse().forEach((datum) => {
      result.push(datum);
    });

    return result;
  }

  toArray() {
    let result = [];
    let cur = this.#head;

    while (cur !== null) {
      result.push(cur.datum());
      cur = cur.next();
    }

    return result;
  }

  reverse() {
    let copy = SimpleLinkedList.fromArray(this.toArray());
    let reversed = new SimpleLinkedList();
    while (!copy.isEmpty()) {
      reversed.push(copy.pop());
    }
    return reversed;
  }
}

module.exports = {
  Element,
  SimpleLinkedList,
};
