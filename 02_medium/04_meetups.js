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
    this.date = new Date(year, monthIndex - 1);
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

    return this.#find(day, descriptor);
  }

  #find(day, descriptor) {
    while (this.date.getDay() !== day) {
      this.date.setDate(this.date.getDate() + 1);
    }

    let curCount = 0;
    let count = Meetup.DESCRIPTORS.get(descriptor);
    let month = this.date.getMonth();

    while (this.date.getMonth() === month) {
      curCount += 1;
      if (curCount === count) return new Date(this.date);
      this.date.setDate(this.date.getDate() + 7);
    }

    if (descriptor === "last") {
      this.date.setDate(this.date.getDate() - 7);
      return new Date(this.date);
    }

    return null;
  }

  #teenth(day) {
    this.date.setDate(Meetup.DESCRIPTORS.get("teenth"));
    while (this.date.getDay() !== day) {
      this.date.setDate(this.date.getDate() + 1);
    }
    return new Date(this.date);
  }
}

module.exports = Meetup;
