import { getResult, insertResult } from "./output.js";
import { it, expect, describe } from "vitest";

describe("getResult", () => {
  it("should return a string no matter the value what", () => {
    const val1 = 1;
    const val2 = "invalid";
    const val3 = false;

    const result1 = getResult(val1);
    const result2 = getResult(val2);
    const result3 = getResult(val3);

    expect(result1).toBeTypeOf("string");
    expect(result2).toBeTypeOf("string");
    expect(result3).toBeTypeOf("string");
  });

  it('should return a string with the value "Result: " if the value is number as result', () => {
    const result = 5;
    const resultText = getResult(result);
    expect(resultText).toContain(result.toString());
  });

  it('should return an empty string if "no-calc" is provided as result', () => {
    const val = "no-calc";
    const result = getResult(val);
    expect(result).toBe("");
  });

  it('should return a string with the value "Invalid" if the value is "invalid"', () => {
    const val = "invalid";
    const result = getResult(val);
    expect(result).toContain("Invalid");
  });
});

// describe('insertResult', () => {});
