/**
 * Launch School Exercises
 * JavaScript Challenges
 * Easy Challenges
 *
 * Scrabble Score
 *
 * https://launchschool.com/exercises/243941c0
 */
"use strict";

class Scrabble {
  /** @type {Array.<Array.<RegExp, number>>} */
  static SCORES = [
    [/[aeioulnrst]/gi, 1],
    [/[dg]/gi        , 2],
    [/[bcmp]/gi      , 3],
    [/[fhvwy]/gi     , 4],
    [/[k]/gi         , 5],
    [/[jx]/gi        , 8],
    [/[qz]/gi        , 10],
  ];

  /**
   * Create a new `Scrabble` instance.
   * @param {string} word the word to create this instance with
   */
  constructor(word) {
    this.word = word;
  }

  /**
   * Return this word's score. A word scores zero if any of the following are
   * true:
   * - it is not a string
   * - its length is zero
   * - it contains any non-letter character
   * @returns {number} this scrabble word's score
   */
  score() {
    let result = 0;
    if (
      typeof this.word !== "string" ||
      this.word.length === 0 ||
      this.word.match(/[^a-z]/i)
    ) {
      return result;
    }

    Scrabble.SCORES.forEach(([regex, score]) => {
      result += [...this.word.matchAll(regex)].reduce((sum) => sum + score, 0);
    });

    return result;
  }

  /**
   * Given a `word` return the word's score in Scrabble. See
   * `Scrabble.prototype.score()` for more information.
   * @param {string} word the word whose score to calculate
   * @returns {number} the word's score
   */
  static score(word) {
    return (new Scrabble(word)).score();
  }
}

module.exports = Scrabble;
