/**
 * Launch School Exercises
 * JavaScript Challenges
 * Easy Challenges
 *
 * Anagrams
 *
 * https://launchschool.com/exercises/b7be1b38
 */
"use strict";

class Anagram {
  /**
   * Given a `word` create a new `Anagram` instance.
   * @param {string} word this `Anagram`'s word
   */
  constructor(word) {
    this.word = word.toLowerCase();
  }

  /**
   * Given an array of words, return an array containing only those words that
   * are anagrams of this word.
   * @param {Array.<string>} words an array of words to compare against
   * @returns {Array.<string>} an array containing the words that are anagrams
   * of this word.
   */
  match(words) {
    let counts = this.#getLetterCounts(this.word);
    return words.filter((word) => this.#isAnagram(counts, word));
  }

  /**
   * Return `true` if `word` is an anagram of this word.
   * @param {Map.<string, number>} counts this word's letter counts
   * @param {string} word the word to compare against
   * @returns {boolean} `true` if `word` is an anagram of this word
   */
  #isAnagram(counts, word) {
    if (this.word === word.toLowerCase()) return false;
    let otherCounts = this.#getLetterCounts(word);

    return (
      counts.size === otherCounts.size &&
      Array.from(counts.entries()).every(
        ([letter, count]) => otherCounts.get(letter) === count
      )
    );
  }

  /**
   * Return a Map with (letter, count) key, value pairs representing the case-
   * insensitive count of letters in the given word.
   * @param {string} word the word to count letters of
   * @returns {Map.<string, number>}
   */
  #getLetterCounts(word) {
    return word
      .toLowerCase()
      .split("")
      .reduce((counts, letter) => {
        if (!counts.get(letter)) counts.set(letter, 0);
        counts.set(letter, counts.get(letter) + 1);
        return counts;
      }, new Map());
  }
}

module.exports = Anagram;
