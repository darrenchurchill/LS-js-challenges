/**
 * Launch School Exercises
 * JavaScript Challenges
 * Medium Challenges
 *
 * Robot Name
 *
 * https://launchschool.com/exercises/9302dd42
 */
"use strict";

class Robot {
  #name;
  static #names = new Set();

  /**
   * Create a new `Robot` instance.
   */
  constructor() {
    this.reset();
  }

  /**
   * Return this robot's name.
   * @returns {string} this robot's name
   */
  name() {
    return this.#name;
  }

  /**
   * Generate a new name for this robot. Valid names are 2 uppercase letters
   * followed by 3 digits. The name will not collide with any other robot names.
   */
  reset() {
    while (true) {
      let name = this.#randomName();

      if (Robot.#names.has(name)) continue;

      Robot.#names.delete(this.#name);
      this.#name = name;
      Robot.#names.add(this.#name);
      return;
    }
  }

  /**
   * Return a randomly generated robot name.
   * @returns {string} the randomly generated name
   */
  #randomName() {
    let result = "";

    for (let _ = 0; _ < 2; _ += 1) {
      result += String.fromCharCode(
        Math.floor(
          Math.random() * ("Z".charCodeAt(0) - "A".charCodeAt(0) + 1)
        ) + "A".charCodeAt(0)
      );
    }

    for (let _ = 0; _ < 3; _ += 1) {
      result += String(
        Math.floor(Math.random() * (9 + 1))
      );
    }

    return result;
  }
}

module.exports = Robot;
