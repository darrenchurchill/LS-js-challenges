/**
 * Launch School Exercises
 * JavaScript Challenges
 * Easy Challenges
 *
 * Roman Numerals
 *
 * https://launchschool.com/exercises/117c3255
 */
"use strict";

class RomanNumeral {
  /** @type {Array.<Array.<number, string>} */
  static VALUES = [
    [1000, "M"],
    [900 , "CM"],
    [500 , "D"],
    [400 , "CD"],
    [100 , "C"],
    [90  , "XC"],
    [50  , "L"],
    [40  , "XL"],
    [10  , "X"],
    [9   , "IX"],
    [5   , "V"],
    [4   , "IV"],
    [1   , "I"],
  ];

  /**
   * Given an integer `number`, create a new `RomanNumeral` instance.
   * @param {number} number the integer number to create this `RomanNumeral`
   * with
   */
  constructor(number) {
    this.number = number;
  }

  /**
   * Return this `RomanNumeral`'s Roman numeral string representation.
   * @returns {string} the Roman numeral
   */
  toRoman() {
    let result = "";
    let remainder = this.number;

    RomanNumeral.VALUES.forEach(([numeralVal, numeral]) => {
      let numTimes = Math.floor(remainder / numeralVal);
      remainder %= numeralVal;
      result += numeral.repeat(numTimes);
    });

    return result;
  }
}

module.exports = RomanNumeral;
