/**
 * Launch School Exercises
 * JavaScript Challenges
 * Easy Challenges
 *
 * Triangles
 *
 * https://launchschool.com/exercises/4c45ef4c
 */
"use strict";

class Triangle {
  /**
   * Given 3 side lengths, create a new `Triangle` instance.
   *
   * Throws a `TypeError` if the provided sides are invalid.
   *
   * A triangle has invalid sides if:
   * - any side is not a number
   * - any side <= `0`
   * - any 2 sides sum to <= 3rd side
   * @param {number} side1 the first side
   * @param {number} side2 the second side
   * @param {number} side3 the third side
   * @throws {TypeError} if the sides represent an invalid triangle
   */
  constructor(side1, side2, side3) {
    this.sortedSides = [side1, side2, side3].sort((a, b) => a - b);
    this.#throwIfInvalid();
  }

  /**
   * Throw a `TypeError` if this triangle's sides are invalid. See constructor
   * for a definition of invalid sides.
   * @throws {TypeError} if this triangle's sides are invalid
   */
  #throwIfInvalid() {
    this.sortedSides.forEach((side) => {
      if (typeof side !== "number") {
        throw new TypeError(`${side} is not a number.`);
      }
    });

    this.sortedSides.forEach((side) => {
      if (side <= 0) {
        throw new TypeError(`${side} must be > 0.`);
      }
    });

    let longest = this.sortedSides[2];
    let otherTwo = this.sortedSides.slice(0, 2);
    let otherTwoSum = otherTwo.reduce((sum, side) => sum + side);

    if (otherTwoSum <= longest) {
      throw new TypeError(`${otherTwo} must sum to >= ${longest}.`);
    }
  }

  /**
   * Return a string representing the kind of this `Triangle`
   * @returns {string} one of `"equilateral"`, `"isosceles"`, or `"scalene"`
   * representing this `Triangle`'s kind
   */
  kind() {
    if (this.sortedSides.every((side) => side === this.sortedSides[2])) {
      return "equilateral";
    }

    if (
      this.sortedSides[0] === this.sortedSides[1] ||
      this.sortedSides[1] === this.sortedSides[2]
    ) {
      return "isosceles";
    }

    return "scalene";
  }
}

module.exports = Triangle;
