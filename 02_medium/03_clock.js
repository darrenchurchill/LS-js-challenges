/**
 * Launch School Exercises
 * JavaScript Challenges
 * Medium Challenges
 *
 * Clock
 *
 * https://launchschool.com/exercises/390d516c
 */
"use strict";

class Clock {
  static MIN_PER_HR = 60;
  static MIN_PER_DAY = Clock.MIN_PER_HR * 24;

  /**
   * Given a time in hours and minutes, create a new `Clock` instance. `hours`
   * and `minutes` must be integers, but can otherwise be any value.
   * @param {number} hours the hours portion
   * @param {number} minutes the minutes portion
   */
  constructor(hours = 0, minutes = 0) {
    this.minutes = this.#simplify(hours, minutes);
  }

  /**
   * Given a time in hours and minutes, return a new `Clock` instance
   * representing the given time.
   * @param {number} hours the hours portion
   * @param {number} minutes the minutes portion
   * @returns {Clock} the new `Clock` instance
   */
  static at(hours = 0, minutes = 0) {
    return new Clock(hours, minutes);
  }

  /**
   * Return a new `Clock` instance with this `Clock`'s time added with
   * `minutes`.
   * @param {number} minutes the number of minutes to add
   * @returns {Clock} the new `Clock` instance, with minutes added
   */
  add(minutes) {
    return new Clock(0, this.minutes + minutes);
  }

  /**
   * Return a new `Clock` instance with this `Clock`'s time subtracted by
   * `minutes`.
   * @param {number} minutes the number of minutes to subtract
   * @returns {Clock} the new `Clock` instance, with minutes subtracted
   */
  subtract(minutes) {
    return new Clock(0, this.minutes - minutes);
  }

  /**
   * Return true if this `Clock`'s time is equal to another `Clock`'s time.
   * @param {Clock} otherClock the other `Clock` time to compare to
   * @returns {boolean} true if this `Clock`'s time is equal to the other
   * `Clock`'s time
   */
  isEqual(otherClock) {
    return this.minutes === otherClock.minutes;
  }

  /**
   * Return this `Clock`'s time as a string in the format `hh:mm`, where `hh`
   * is in the range `[00-23]` and `mm` is in the range `[00-59]`.
   * @returns {string} this `Clock`'s string representation
   */
  toString() {
    let hours = String(Math.floor(this.minutes / Clock.MIN_PER_HR));
    let minutes = String(this.minutes % Clock.MIN_PER_HR);

    return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
  }

  #simplify(hours, minutes) {
    minutes += hours * Clock.MIN_PER_HR;
    minutes %= Clock.MIN_PER_DAY;
    if (minutes < 0) minutes = Clock.MIN_PER_DAY + minutes;
    return minutes;
  }
}

module.exports = Clock;
