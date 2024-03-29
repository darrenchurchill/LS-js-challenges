/**
 * Launch School Exercises
 * JavaScript Challenges
 * Medium Challenges
 *
 * Meetups
 *
 * https://launchschool.com/exercises/8a085e77
 */
"use strict";

class Meetup {
  static DAYS_OF_WEEK = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  static DESCRIPTORS = new Map()
    .set("first", 1)
    .set("second", 2)
    .set("third", 3)
    .set("fourth", 4)
    .set("fifth", 5)
    .set("last", -1)
    .set("teenth", 13);

  /**
   * Given a year and a month index, create a new `Meetup` instance.
   * @param {number} year the year
   * @param {number} monthIndex the 1-based month index
   */
  constructor(year, monthIndex) {
    this.year = year;
    this.month = monthIndex - 1;
    this.#reset();
  }

  #reset() {
    this.date = new Date(this.year, this.month);
  }

  #returnAndReset(result) {
    if (result !== null) result = new Date(this.date);
    this.#reset();
    return result;
  }

  /**
   * Given:
   * - a day of the week: case-insensitive string in `Meetup.DAYS_OF_WEEK`
   * - a schedule descriptor: case-insensitive string in `Meetup.DESCRIPTORS`
   *
   * Return a `Date` object matching the requested day. For example, the "First"
   * "Monday" in January 2013.
   * @param {string} dayOfWeek the day of the week
   * @param {string} descriptor the schedule descriptor
   * @returns {(Date|null)} the date matching the descriptor, day of the week in
   * this month and year, or `null` if this day doesn't exist in the current
   * month and year
   */
  day(dayOfWeek, descriptor) {
    dayOfWeek = dayOfWeek.toLowerCase();
    descriptor = descriptor.toLowerCase();
    let day = Meetup.DAYS_OF_WEEK.indexOf(dayOfWeek);

    if (descriptor === "teenth") return this.#teenth(day);
    if (descriptor === "last") return this.#findLast(day);

    return this.#find(day, descriptor);
  }

  #find(day, descriptor) {
    while (this.date.getDay() !== day) {
      this.#incrementDate(1);
    }

    let curCount = 0;
    let count = Meetup.DESCRIPTORS.get(descriptor);
    let month = this.date.getMonth();

    while (this.date.getMonth() === month) {
      curCount += 1;
      if (curCount === count) return this.#returnAndReset();
      this.#incrementDate(7);
    }

    return this.#returnAndReset(null);
  }

  #findLast(day) {
    // Set date to the last day of the month.
    // The Date object handles wrap-around for you.
    this.#incrementMonth(1);
    this.#incrementDate(-1);

    while (this.date.getDay() !== day) {
      this.#incrementDate(-1);
    }

    return this.#returnAndReset();
  }

  #teenth(day) {
    this.date.setDate(Meetup.DESCRIPTORS.get("teenth"));
    while (this.date.getDay() !== day) {
      this.#incrementDate(1);
    }
    return this.#returnAndReset();
  }

  #incrementDate(numDays) {
    this.date.setDate(this.date.getDate() + numDays);
  }

  #incrementMonth(numMonths) {
    this.date.setMonth(this.date.getMonth() + numMonths);
  }
}

module.exports = Meetup;
