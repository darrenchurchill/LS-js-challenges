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
   * @param {number} [number=this.number] the current number for recursive calls
   * @returns
   */
  toRoman(number = this.number) {
    let result = "";
    if (number === 0) return result;

    let placeVal = 10 ** Math.floor(Math.log10(number));
    let digit = Math.floor(number / placeVal);
    let digitVal = placeVal * digit;

    let mainNumeral = this.#getMainNumeral(number);
    let modNumeral = this.#getModNumeral(number);

    if (digit < 4) result = modNumeral.repeat(digit);
    else if (digit === 4 || digit === 9) result = modNumeral + mainNumeral;
    else result = mainNumeral + modNumeral.repeat(digit - 5);

    return result + this.toRoman(number - digitVal);
  }

  #getModNumeral(number) {
    let modNumerals = ["I", "X", "C", "M"];
    return modNumerals[Math.floor(Math.log10(number))];
  }

  #getMainNumeral(number) {
    let placeVal = 10 ** Math.floor(Math.log10(number));
    let digit = Math.floor(number / placeVal);

    if (digit >= 4 && digit < 9) {
      switch (placeVal) {
        case 1: return "V";
        case 10: return "L";
        case 100: return "D";
      }
    }
    if (digit === 9) {
      switch (placeVal) {
        case 1: return "X";
        case 10: return "C";
        case 100: return "M";
      }
    }
    // else: digit < 4
    return "";
  }
}

module.exports = RomanNumeral;
