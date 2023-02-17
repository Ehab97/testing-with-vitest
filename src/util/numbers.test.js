import { it, expect, describe } from "vitest";
import { transformToNumber } from "./numbers";
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
