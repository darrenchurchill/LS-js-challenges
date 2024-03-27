/**
 * Launch School Exercises
 * JavaScript Challenges
 * Easy Challenges
 *
 * Beer Song
 *
 * https://launchschool.com/exercises/87b886ff
 */
"use strict";

class BeerSong {
  static verse(num) {
    let count = this.count(num);
    let result = (
      `${this.capitalize(count)} bottle${this.plural(num)} ` +
      `of beer on the wall, ${count} bottle${this.plural(num)} of beer.\n`
    );

    if (num === 0) {
      result += (
        "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
      );
    } else {
      num -= 1;
      count = this.count(num);
      result += (
        `Take ${num === 0 ? "it" : "one"} down and pass it around, ` +
        `${count} bottle${this.plural(num)} of beer on the wall.\n`
      );
    }

    return result;
  }

  static verses(from = 99, to = 0) {
    let result = [];

    for (let cur = from; cur >= to; cur -= 1) {
      result.push(this.verse(cur));
    }

    return result.join("\n");
  }

  static lyrics() {
    return this.verses();
  }

  static plural(num) {
    if (num === 1) return "";
    return "s";
  }

  static count(num) {
    if (num === 0) return "no more";
    return String(num);
  }

  static capitalize(string) {
    let [first, ...rest] = [...string];
    return first.toUpperCase() + rest.join("");
  }
}

module.exports = BeerSong;
