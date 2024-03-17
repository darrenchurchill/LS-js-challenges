/**
 * Launch School Exercises
 * JavaScript Challenges
 * Easy Challenges
 *
 * Point Mutations
 *
 * https://launchschool.com/exercises/fd2aaf29
 */
"use strict";

class DNA {
  /** @type {string} */
  #sequence;

  /**
   * Given a string sequence of DNA, create a new `DNA` instance.
   * @param {string} sequence this object's DNA sequence
   */
  constructor(sequence) {
    this.#sequence = sequence;
  }

  /**
   * Given an `otherSequence` to compare this sequence against, calculate and
   * return the Hamming distance between the two sequences. The Hamming distance
   * is the count of differences between two sequences.
   *
   * Only the shortest length sequence number of comparisons is made. Ex: This
   * sequence is 4 characters and the other sequence is 5 characters. Only the
   * first 4 characters from each sequence are compared.
   * @param {string} otherSequence the sequence the compare against
   * @returns {number} the integer Hamming distance
   */
  hammingDistance(otherSequence) {
    let index = 0;
    let result = 0;

    while (index < this.#sequence.length && index < otherSequence.length) {
      if (this.#sequence[index] !== otherSequence[index]) result += 1;
      index += 1;
    }

    return result;
  }
}

module.exports = DNA;
