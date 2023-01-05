# Approval Tests

## AKA

-   "Approvals"
-   "Snapshot"
-   "Golden Master" / "Golden Reference"

## What is It?

### A Different Kind of Assertion

Instead of:

```ts
assert(fizzbuzz(5) == "Fizz");
```

Approvals look like this:

```ts
verify(fizzbuzz(5));
```

Notice - the `"Fizz"` is gone.

### How it Works?

Keep an **approved snapshot** of the test results.

Running the test -> compare current results to approved.

### Some of the Benefits

-   Leverage the human visual system by looking at diffs
-   Skip typing (automate) expected results by leaning on a diff tool
-   Quick coverage of existing code - for another Learning Hour :)

### Some Cons

-   Tests now "live" in two places
