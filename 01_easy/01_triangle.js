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
  /** @type {Array.<number>} */
  #sides;

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
    this.#throwIfInvalid(side1, side2, side3);
    this.#sides = [side1, side2, side3].map((side) => Number(side));
  }

  /**
   * Throw a `TypeError` if this triangle's sides are invalid. See constructor
   * for a definition of invalid sides.
   * @throws {TypeError} if this triangle's sides are invalid
   */
  #throwIfInvalid(...sides) {
    sides.forEach((side) => {
      if (Number.isNaN(Number(side))) {
        throw new TypeError(`${side} must be a valid number.`);
      }
    });

    sides.forEach((side) => {
      if (side <= 0) {
        throw new TypeError(`${side} must be > 0.`);
      }
    });

    if (
      sides.reduce((sum, side) => sum + Number(side), 0) <=
      2 * Math.max(...sides)
    ) {
      throw new TypeError(`Smallest 2 sides must sum to > longest side.`);
    }
  }

  /**
   * Return a string representing the kind of this `Triangle`
   * @returns {string} one of `"equilateral"`, `"isosceles"`, or `"scalene"`
   * representing this `Triangle`'s kind
   */
  kind() {
    switch ((new Set(this.#sides)).size) {
      case 1: return "equilateral";
      case 2: return "isosceles";
      default: return "scalene";
    }
  }
}

module.exports = Triangle;
