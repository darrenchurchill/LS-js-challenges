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

  static DESCRIPTOR_START_DATES = new Map()
    .set("first", 1)
    .set("second", 8)
    .set("third", 15)
    .set("fourth", 22)
    .set("fifth", 29)
    .set("teenth", 13)
    .set("last", null);

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
    let day = Meetup.DAYS_OF_WEEK.indexOf(dayOfWeek.toLowerCase());
    this.#setStartDate(descriptor.toLowerCase());

    for (let _ = 0; _ < 7; _ += 1) {
      if (this.date.getMonth() !== this.month) {
        return this.#returnAndReset(null);
      }
      if (this.date.getDay() === day) return this.#returnAndReset();
      this.#incrementDate();
    }

    return this.#returnAndReset(null);
  }

  #setStartDate(descriptor) {
    let date = Meetup.DESCRIPTOR_START_DATES.get(descriptor);
    if (date === null) {
      this.#incrementMonth();
      this.#incrementDate(-7);
      return;
    }
    this.date.setDate(date);
  }

  #incrementDate(numDays = 1) {
    this.date.setDate(this.date.getDate() + numDays);
  }

  #incrementMonth(numMonths = 1) {
    this.date.setMonth(this.date.getMonth() + numMonths);
  }
}

module.exports = Meetup;
