/**
 * Launch School Exercises
 * JavaScript Challenges
 * Easy Challenges
 *
 * Octal
 *
 * https://launchschool.com/exercises/fb0821cc
 */
"use strict";

class Octal {
  /**
   * Given a string value representing an octal number, create a new `Octal`
   * instance.
   * @param {string} octalStr the octal number, as a string
   */
  constructor(octalStr) {
    this.num = String(octalStr);
  }

  /**
   * Return the decimal conversion of this octal number, or `0` if the octal
   * string contains octal characters.
   * @returns {number} the decimal conversion of this octal number
   */
  toDecimal() {
    if (this.num.match(/[^0-7]/)) return 0;

    return this.num
      .split("")
      .reverse()
      .map((char) => Number(char))
      .reduce((sum, num, index) => sum + (num * (8 ** index)), 0);
  }
}

module.exports = Octal;
