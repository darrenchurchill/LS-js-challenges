/* eslint-disable max-lines-per-function */
"use strict";

const Triangle = require('./01_triangle.js');

describe("Triangle", () => {
  describe("equilateral triangles", () => {
    test("equilateral triangles have equal sides", () => {
      const triangle = new Triangle(2, 2, 2);
      expect(triangle.kind()).toEqual("equilateral");
    });

    test("larger equilateral triangles also have equal sides", () => {
      const triangle = new Triangle(10, 10, 10);
      expect(triangle.kind()).toEqual("equilateral");
    });
  });

  describe("isosceles triangles", () => {
    test("isosceles triangles have last two sides equal", () => {
      const triangle = new Triangle(3, 4, 4);
      expect(triangle.kind()).toEqual("isosceles");
    });

    test("isosceles triangles have first and last sides equal", () => {
      const triangle = new Triangle(4, 3, 4);
      expect(triangle.kind()).toEqual("isosceles");
    });

    test("isosceles triangles have two first sides equal", () => {
      const triangle = new Triangle(4, 4, 3);
      expect(triangle.kind()).toEqual("isosceles");
    });

    test("isosceles triangles have in fact exactly two sides equal", () => {
      const triangle = new Triangle(10, 10, 2);
      expect(triangle.kind()).toEqual("isosceles");
    });
  });

  describe("scalene triangles", () => {
    test("scalene triangles have no equal sides", () => {
      const triangle = new Triangle(3, 4, 5);
      expect(triangle.kind()).toEqual("scalene");
    });

    test("scalene triangles have no equal sides at a larger scale too", () => {
      const triangle = new Triangle(10, 11, 12);
      expect(triangle.kind()).toEqual("scalene");
    });

    test("scalene triangles have no equal sides in descending order either", () => {
      const triangle = new Triangle(5, 4, 2);
      expect(triangle.kind()).toEqual("scalene");
    });
  });

  test("very small triangles are legal", () => {
    const triangle = new Triangle(0.4, 0.6, 0.3);
    expect(triangle.kind()).toEqual("scalene");
  });

  describe("invalid triangles", () => {
    test("all sides must be a valid number", () => {
      expect(() => new Triangle("1", 1, 1)).not.toThrow();
      expect(() => new Triangle(1, "1", 1)).not.toThrow();
      expect(() => new Triangle(1, 1, "1")).not.toThrow();

      expect(() => new Triangle("string", 1, 1)).toThrow();
      expect(() => new Triangle([], 1, 1)).toThrow();
      expect(() => new Triangle({}, 1, 1)).toThrow();
      expect(() => new Triangle(NaN, 1, 1)).toThrow();
    });

    test("no side can be === 0", () => {
      expect(() => new Triangle(0, 0, 0)).toThrow();
      expect(() => new Triangle(0, 1, 1)).toThrow();
      expect(() => new Triangle(1, 0, 1)).toThrow();
      expect(() => new Triangle(1, 1, 0)).toThrow();
    });

    test("no side can be < 0", () => {
      expect(() => new Triangle(-3, -4, -5)).toThrow();
      expect(() => new Triangle(3, -4, -5)).toThrow();
      expect(() => new Triangle(-3, 4, -5)).toThrow();
      expect(() => new Triangle(-3, -4, 5)).toThrow();
    });

    test("2 smallest sides must sum to > longest side", () => {
      expect(() => new Triangle(1, 1, 3)).toThrow();
      expect(() => new Triangle(1, 3, 1)).toThrow();
      expect(() => new Triangle(3, 1, 1)).toThrow();

      expect(() => new Triangle(1, 1, 2)).toThrow();
      expect(() => new Triangle(1, 2, 1)).toThrow();
      expect(() => new Triangle(2, 1, 1)).toThrow();

      expect(() => new Triangle(7, 3, 2)).toThrow();
      expect(() => new Triangle(10, 1, 3)).toThrow();
    });
  });
});
