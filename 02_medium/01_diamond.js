/**
 * Launch School Exercises
 * JavaScript Challenges
 * Medium Challenges
 *
 * Diamond
 *
 * https://launchschool.com/exercises/9fee1e86
 */
"use strict";

class Diamond {
  /**
   * Given a single uppercase letter, return a string diamond shape.
   *
   * The diamond outline is made of different letters on each row, starting with
   * `A` at the diamond point, ascending in alphabetical order up to and
   * including `letter`, and then descending back in reverse order to `A` at the
   * bottom point.
   * @param {string} letter the letter representing the diamond's max width
   * @returns {string} the diamond string
   */
  static makeDiamond(letter) {
    let result = [];
    let letterVal = this.valueFrom(letter);

    for (let val = 1; val <= letterVal; val += 1) {
      let row = (new Array(letterVal)).fill(" ");
      row[letterVal - val] = this.letterFrom(val);
      row.push(...row.slice().reverse().slice(1), "\n");
      result.push(row.join(""));
    }

    result.push(...result.slice().reverse().slice(1));

    return result.join("");
  }

  /**
   * Given a number from [1-26], return the corresponding letter from [A-Z].
   * @param {number} val the value to convert
   * @returns {string} the converted letter
   */
  static letterFrom(val) {
    return String.fromCharCode(val - 1 + "A".charCodeAt(0));
  }

  /**
   * Given a letter from [A-Z], return the corresponding value from [1-26].
   * @param {string} letter the letter to convert
   * @returns {number} the converted number
   */
  static valueFrom(letter) {
    return letter.charCodeAt(0) - "A".charCodeAt(0) + 1;
  }
}

module.exports = Diamond;
