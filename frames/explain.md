[back](index.md)

# Approval Tests

## AKA

-   "Approvals"
-   "Snapshot"
-   "Golden Master" / "Golden Reference"

## What is It?

### A Different Kind of Assertion

While micro assertions look like this:

```ts
expect(fizzbuzz(5)).toEqual("Fizz");
```

Approvals look like this:

```ts
verify(fizzbuzz(5));
```

> **Q:** What's the main difference?

### How it Works?

Keep an **approved snapshot** of the test results.

Running the test -> compare current results to approved.

### Some of the Benefits

-   Leverage the human visual system by looking at diffs
-   Skip typing (automate) expected results by leaning on a diff tool
-   Broader assertions in a single go
-   Easily supports composite objects and flows - by 'stringifying' them
-   Quick coverage of existing code - for another Learning Hour :)

### Some Cons

-   Tests now "live" in two places

[back](index.md)
