/**
 * Launch School Exercises
 * JavaScript Challenges
 * Easy Challenges
 *
 * Sum of Multiples
 *
 * https://launchschool.com/exercises/89734a2f
 */
"use strict";

class SumOfMultiples {
  /**
   * Create a new `SumOfMultiples` instance, given 1 or more positive integer
   * divisors.
   * @param  {...number} divisors 1 or more divisors to use when calculating the
   * sum. Default to 3 and 5.
   */
  constructor(...divisors) {
    this.divisors = divisors.length > 0 ? divisors : [3, 5];
  }

  /**
   * Given a positive integer `targetValue`, return the sum of this object's
   * divisors' multiples < `targetValue`.
   * @param {number} targetValue the number to calculate multiples up to
   * @returns {number} the calculated sum of multiples
   */
  to(targetValue) {
    let result = 0;

    for (let count = 0; count < targetValue; count += 1) {
      if (this.divisors.some((divisor) => count % divisor === 0)) {
        result += count;
      }
    }

    return result;
  }

  /**
   * Given a positive integer `targetValue`, return the sum of the default
   * divisors' (3 and 5) multiples < `targetValue`.
   * @param {number} targetValue the number to calculate multiples up to
   * @returns {number} the calculated sum of multiples
   */
  static to(targetValue) {
    return (new SumOfMultiples().to(targetValue));
  }
}

module.exports = SumOfMultiples;
