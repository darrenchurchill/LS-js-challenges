/* eslint-disable max-lines-per-function */
"use strict";

let PerfectNumber = require('./06_perfect_number.js');

describe("PerfectNumber", () => {
  test("non-number raises error", () => {
    expect(() => PerfectNumber.classify("string")).toThrow();
    expect(() => PerfectNumber.classify({})).toThrow();
    expect(() => PerfectNumber.classify([])).toThrow();
  });

  test("negative raises error", () => {
    expect(() => PerfectNumber.classify(-1)).toThrow();
  });

  test("zero raises error", () => {
    expect(() => PerfectNumber.classify(0)).toThrow();
  });

  test("non-integer raises error", () => {
    expect(() => PerfectNumber.classify(1.2)).toThrow();
    expect(() => PerfectNumber.classify(12.00001)).toThrow();
  });

  test("classify deficient", () => {
    expect(PerfectNumber.classify(13)).toEqual('deficient');
  });

  test("classify perfect", () => {
    expect(PerfectNumber.classify(28)).toEqual('perfect');
  });

  test("classify abundant", () => {
    expect(PerfectNumber.classify(12)).toEqual('abundant');
  });
});
