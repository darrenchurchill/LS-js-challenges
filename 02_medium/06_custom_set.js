/**
 * Launch School Exercises
 * JavaScript Challenges
 * Medium Challenges
 *
 * Custom Set
 *
 * https://launchschool.com/exercises/cbf0104f
 */
"use strict";

class CustomSet {
  /** @type {Map.<number, boolean>} */
  #elements;

  /**
   * Given an array of unique or non-unique numbers, create a new set object.
   * The set will only contain 1 of each value.
   * @param {Array.<number>} elementsArray the initial elements to add to this
   * set
   */
  constructor(elementsArray = []) {
    this.#elements = new Map();
    elementsArray.forEach((element) => this.add(element));
  }

  /**
   * Return this set's elements in an array.
   * @returns {Array.<number>} this set's elements, as an array
   */
  toArray() {
    return [...this.#elements.keys()];
  }

  /**
   * Return the number of elements in this set.
   * @returns {number} this set's size
   */
  size() {
    return this.#elements.size;
  }

  /**
   * Given a number, add it to this set, and return a reference to this set.
   * @param {number} element the number to add
   * @returns {CustomSet} a reference to this set object
   */
  add(element) {
    this.#elements.set(element, true);
    return this;
  }

  /**
   * Return true if this set is empty.
   * @returns {boolean}
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Return true if the given element is in this set.
   * @param {number} element the number to search for
   * @returns {boolean} true is the element is in this set
   */
  contains(element) {
    return this.#elements.get(element) === true;
  }

  /**
   * Return true if this set is a subset of the given other set. A set is a
   * subset of another if all its elements are present in the other set.
   * @param {CustomSet} otherSet the other set to compare this to
   * @returns {boolean} true is this set is a subset of the other set
   */
  isSubset(otherSet) {
    return this.toArray().every((element) => otherSet.contains(element));
  }

  /**
   * Return true if this set and the other set are disjoint. Disjoint sets
   * share no elements in common.
   * @param {CustomSet} otherSet the other set to compare this to
   * @returns {boolean} true if this set is disjoint with the other set
   */
  isDisjoint(otherSet) {
    return this.toArray().every((element) => !otherSet.contains(element));
  }

  /**
   * Return true if this set and the other set share exactly the same elements.
   * @param {CustomSet} otherSet the other set to compare this to
   * @returns {boolean} true if this set contains the same elements as the other
   * set
   */
  isSame(otherSet) {
    return (
      this.size() === otherSet.size() &&
      this.toArray().every((element) => otherSet.contains(element))
    );
  }

  /**
   * Return a new set containing elements present in both this set and the other
   * set.
   * @param {CustomSet} otherSet the other set to compare to
   * @returns {CustomSet} a new set that is the intersection of this set and
   * the other set
   */
  intersection(otherSet) {
    return new CustomSet(
      this.toArray().filter((element) => otherSet.contains(element))
    );
  }

  /**
   * Return a new set containing this set's elements that aren't in the other
   * set.
   * @param {CustomSet} otherSet the other set to compare to
   * @returns {CustomSet} a new set that is the difference of this set and the
   * other set
   */
  difference(otherSet) {
    return new CustomSet(
      this.toArray().filter((element) => !otherSet.contains(element))
    );
  }

  /**
   * Return a new set containing the unique elements from both this set and the
   * other set.
   * @param {CustomSet} otherSet the other set to compare to
   * @returns {CustomSet} the new set that is the union of this set and the
   * other set.
   */
  union(otherSet) {
    return new CustomSet([...this.toArray(), ...otherSet.toArray()]);
  }
}

module.exports = CustomSet;
