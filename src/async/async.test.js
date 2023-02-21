import { describe, it, expect } from "vitest";
import { generateToken, generateTokenPromise } from "./async.js";

describe("generateToken()", () => {
  it("should generate a token", (done) => {
    const userEmail = "test@test.com";

    generateToken(userEmail, (err, token) => {
      try {
        expect(token).toBeDefined();
        done();
      } catch (err) {
        done(err);
      }
    });
  });
});

describe("generateTokenPromise()", () => {
  it("should generate a token", () => {
    const userEmail = "test@test.com";

    expect(generateTokenPromise(userEmail)).resolves.toBeDefined();
  });

  it("should generate a token async/await", async () => {
    const userEmail = "test@test.com";
    const token = await generateTokenPromise(userEmail);
    expect(token).toBeDefined();
  });
});
