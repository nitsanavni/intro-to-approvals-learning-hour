import { test, expect } from "bun:test";

import fizzbuzz from "./fizzbuzz.js";

test("fizzbuzz", () => {
    expect(fizzbuzz(1)).toBe(1);
});
