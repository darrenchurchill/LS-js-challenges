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
  // eslint-disable-next-line max-lines-per-function
  toRoman() {
    let result = "";
    let remainder = this.number;
    let curDigitVal = this.#leftDigitValue(remainder);
    let curModNumeral = [null, ""]; // the numeral performing additive modification
    let prevNumeralVal = null;

    RomanNumeral.VALUES.forEach(([numeralVal, numeral]) => {
      if (curModNumeral[0] === null) {
        curModNumeral = [numeralVal, numeral];
      } else if (numeral.length > 1) {
        curModNumeral = [prevNumeralVal - numeralVal, numeral[0]];
      }

      if (numeralVal <= curDigitVal) {
        let numTimes =
          numeralVal === curDigitVal
            ? 0
            : (curDigitVal - numeralVal) / curModNumeral[0];
        result += numeral + curModNumeral[1].repeat(numTimes);
        remainder -= curDigitVal;
        curDigitVal = this.#leftDigitValue(remainder);
      }
      prevNumeralVal = numeralVal;
    });

    return result;
  }

  #leftDigitValue(number) {
    let placeVal = 10 ** Math.floor(Math.log10(number));
    let digit = Math.floor(number / placeVal);
    return placeVal * digit;
  }
}

module.exports = RomanNumeral;
