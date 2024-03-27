/**
 * Launch School Exercises
 * JavaScript Challenges
 * Easy Challenges
 *
 * Series
 *
 * https://launchschool.com/exercises/bb7a7052
 */
"use strict";

class Series {
  /**
   * Given a series of digits as a string, create a new `Series` instance.
   * @param {string} digits the series of digits
   */
  constructor(digits) {
    this.series = digits.split("").map(Number);
  }

  /**
   * Given a slice length, return an array of consecutive-digit slices of this
   * object.
   * @param {number} length the slice length
   * @returns {Array.<Array.<number>>} the array of slices
   * @throws {Error} if the given `length` is longer than this series length
   */
  slices(length) {
    if (length > this.series.length) {
      throw new Error(
        `${length} must be <= this Series' length (${this.series.length}).`
      );
    }

    let result = [];
    let start = 0;
    let end = start + length;

    while (end <= this.series.length) {
      result.push(this.series.slice(start, end));
      start += 1;
      end += 1;
    }

    return result;
  }
}

module.exports = Series;
