/**
 * Launch School Exercises
 * JavaScript Challenges
 * Easy Challenges
 *
 * Perfect Number
 *
 * https://launchschool.com/exercises/48ffdb7b
 */
"use strict";

class PerfectNumber {
  /**
   * Given a number, return a string representing it's classification according
   * to Nicomachus' scheme.
   * @param {number} number the number to classify
   * @throws {TypeError} if `number` is not a finite integer > 0.
   * @returns {string} one of `"deficient"`, `"abundant"`, or `"perfect"`,
   * representing the number's classification.
   */
  static classify(number) {
    if (!Number.isFinite(Number(number))) {
      throw new TypeError(`${number} is not a finite number.`);
    }
    number = Number(number);
    if (!Number.isInteger(number)) {
      throw new TypeError(`${number} is not an integer.`);
    }
    if (number <= 0) {
      throw new TypeError(`${number} must be > 0.`);
    }

    let sum = PerfectNumber.#aliquotSum(number);
    if (sum < number) return "deficient";
    if (sum > number) return "abundant";
    return "perfect";
  }

  /**
   * Given a number, return the number's Aliquot sum.
   *
   * The Aliquot sum is the sum of a number's positive divisors that divide into
   * the number with no remainder, excluding the number itself.
   * @param {number} number the number whose Aliquot sum to calculate
   * @returns {number} the Aliquot sum
   */
  static #aliquotSum(number) {
    let divisor = 1;
    let result = 0;

    while (divisor < number) {
      if (number % divisor === 0) result += divisor;
      divisor += 1;
    }

    return result;
  }
}

module.exports = PerfectNumber;
