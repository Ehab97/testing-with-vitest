import { it, expect, describe } from "vitest";
import { transformToNumber, cleanNumbers } from "./numbers.js";
describe("transformToNumber", () => {
  it("should be a number", () => {
    const number = "1";
    const expectedValue = 1;
    const result = transformToNumber(number);
    expect(result).toBe(expectedValue);
  });

  it("should not be a NaN", () => {
    const input = "one";
    const result = transformToNumber(input);
    expect(result).toBeNaN();
  });

  it("should be a number if a number is provided", () => {
    const input = 1;
    const result = transformToNumber(input);
    expect(result).toBe(input);
  });
});

describe("cleanNumbers", () => {
  it("should return an array of numbers if it recived an array of string numbers values", () => {
    const numbers = ["1", "2", "3", "4"];
    const expectedValue = numbers.map((number) => +number);

    const result = cleanNumbers(numbers);

    expect(result).toEqual(expectedValue);
  });

  it("should throw an error if array with at least one empty string ", () => {
    const numbers = ["1", "", "3", "4"];
    const resultFn = () => cleanNumbers(numbers);

    expect(resultFn).toThrow();
  });

  it("should throw an error if array with at least one invalid string ", () => {
    const numbers = ["1", "one", "3", "4"];
    const resultFn = () => cleanNumbers(numbers);

    expect(resultFn).toThrow();
  });

  it("should throw an error if there is no args passed to it ", () => {
    const resultFn = () => cleanNumbers();
    expect(resultFn).toThrow();
  });
});
