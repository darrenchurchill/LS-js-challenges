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
    let result = 0;
    if (this.num.match(/[^0-7]/)) return result;

    for (let i = 0; i < this.num.length; i += 1) {
      result += Number(this.num[i]) * (8 ** (this.num.length - 1 - i));
    }

    return result;
  }
}

module.exports = Octal;
