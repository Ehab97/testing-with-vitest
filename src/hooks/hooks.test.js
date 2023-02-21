import { describe, it, expect, beforeAll, beforeEach, afterAll, afterEach } from "vitest";
import { User } from "./hooks.js";

describe("User class", () => {
  const email = "test@email.com";
  let user;
  beforeAll(() => {
    console.log("beforeAll");
    user = new User(email);
  });
  beforeEach(() => {
    console.log("beforeEach");
  });

  afterEach(() => {
    console.log("afterEach");
    user = new User(email);
  });

  afterAll(() => {
    console.log("afterAll");
  });

  it("should have an email property", () => {
    // expect(user.email).toBeDefined();
    expect(user).toHaveProperty("email");
  });

  it("should update the email", () => {
    const newEmail = "newTest@test.com";

    user.updateEmail(newEmail);

    expect(user.email).toBe(newEmail);
  });

  it("should clear the email", () => {
    user.clearEmail();

    expect(user.email).toBe("");
  });

  it("should store the provided email", () => {
    expect(user.email).toBe(email);
  });

  it("should have an email property after cleaning", () => {
    user.clearEmail();
    expect(user).toHaveProperty("email");
  });
});
