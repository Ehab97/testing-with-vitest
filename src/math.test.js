import { add } from "./math.js";
import { it, expect, describe } from "vitest";

describe("sum array of numbers", () => {
   it("should summarize all numbers in the array", () => {
      //AAA - Arrange, Act, Assert

      //arrange
      const numbers = [1, 2, 3, 4];
      const expectedResult = numbers.reduce((a, b) => a + b, 0);

      //act
      const result = add(numbers);

      //assert
      expect(result).toBe(expectedResult);
   });

   it("should yield Nan if at least one of the numbers is not provided", () => {
      const numbers = ["one", 2, 3, 4];

      const result = add(numbers);

      expect(result).toBeNaN();
   });

   it("should yield a correct sum if array of numeric string is provided", () => {
      const numbers = ["1", "2", "3", "4"];
      const expectedResult = numbers.reduce((a, b) => +a + +b, 0);

      const result = add(numbers);

      expect(result).toBe(expectedResult);
   });

   it("should yield 0 if an empty array is provided", () => {
      const numbers = [];
      const expectedResult = 0;

      const result = add(numbers);

      expect(result).toBe(expectedResult);
   });

   it("should throw an error if no argument is provided", () => {
      const resultFn = () => add();

      expect(resultFn).toThrow();
   });

   it("should throw an error if provided argument is not an array but MULTIPLE RGA", () => {
      const num1 = 1;
      const num2 = 2;

      const resultFn = () => add(num1, num2);

      expect(resultFn).toThrow();
   });
});
