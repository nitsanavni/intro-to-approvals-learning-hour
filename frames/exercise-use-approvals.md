[back](index.md)

# Exercise - Use Asserts

## Goal

Now, let's rebuild fizzbuzz with approvals.

## Steps

> Hint: use Split Editor to follow along

> Note: take your time, we don't have to complete all steps

-   [ ] reset the code to its starting position

    -   [ ] there's a script for that on the `./menu.sh`

-   [ ] run the approval test

    -   [ ] there's a script for that too on the `./menu.sh`
    -   [ ] see it fail
    -   [ ] see the diff tool open

-   [ ] make the test pass with no errors
        (you can follow links with `ctrl + enter`)
        [test is here](../typescript/fizzbuzz.approvaltest.ts)
        [code is here](../typescript/fizzbuzz.ts)

    -   [ ] make the code right
    -   [ ] "approve" the result
        -   [ ] copy from left to right in the diff tool
        -   [ ] save
    -   [ ] see the test pass

-   [ ] run the approval test continuously in the terminal

    -   [ ] you can find the relevant script with `./menu.sh`
    -   [ ] test should still pass

-   [ ] `fizzbuzz(2)`

    -   [ ] refactor our code to introduce a loop over `n`
    -   [ ] see the test still pass for `n == 1`
    -   [ ] add `n == 2` to the loop
    -   [ ] change the `fizzbuzz` code until the diff is good
    -   [ ] "approve" the diff
    -   [ ] see the test pass
    -   [ ] refactor if you like

-   [ ] `fizzbuzz(3)`

    -   [ ] loop up to `n == 3`
    -   [ ] change the `fizzbuzz` code until the diff is good
    -   [ ] approve the diff
    -   [ ] see the test pass
    -   [ ] refactor if you like

-   [ ] `fizzbuzz(4)`

    -   [ ] loop up to `n == 4`
    -   [ ] change the `fizzbuzz` code until the diff is good
    -   [ ] approve the diff
    -   [ ] see the test pass
    -   [ ] refactor if you like

-   [ ] `fizzbuzz(5)`

    -   [ ] loop up to `n == 5`
    -   [ ] change the `fizzbuzz` code until the diff is good
    -   [ ] approve the diff
    -   [ ] see the test pass
    -   [ ] refactor if you like

-   [ ] `fizzbuzz(6)`

    -   [ ] loop up to `n == 6`
    -   [ ] change the `fizzbuzz` code until the diff is good
    -   [ ] approve the diff
    -   [ ] see the test pass
    -   [ ] refactor if you like

-   [ ] `fizzbuzz(10)`

    -   [ ] loop up to `n == 10`
    -   [ ] change the `fizzbuzz` code until the diff is good
    -   [ ] approve the diff
    -   [ ] see the test pass
    -   [ ] refactor if you like

-   [ ] `fizzbuzz(15)`

    -   [ ] loop up to `n == 15`
    -   [ ] change the `fizzbuzz` code until the diff is good
    -   [ ] approve the diff
    -   [ ] see the test pass
    -   [ ] refactor if you like

-   [ ] loop up to `n == 35`

    -   [ ] approve the diff
    -   [ ] see the test pass
    -   [ ] refactor if you like

-   [ ] add `Whizz` and `Bang`, using the same approach as earlier steps
        see the "Follow-up requirements" section [here](https://sammancoaching.org/kata_descriptions/fizzbuzz.html)

[back](index.md)
