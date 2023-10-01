import { describe, expect, it } from "vitest";
import { capitalizeString } from "./capitalizeString";

describe("Util Function CapitalizeString", () => {
  it("should capitalize a string", () => {
    const notCapitalizedString = "string capitalize";
    const expectedCapitalizedString = "String capitalize";
    expect(capitalizeString(notCapitalizedString)).toBe(expectedCapitalizedString);
  });
});
