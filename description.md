# Intro to Approvals - Learning Hour Description

You can find an implementation of this learning hour [here](frames/index.md).

For remote sessions I use a shared gitpod workspace, and work directly from the markdown files.

## Goals

-   Learners to be familiar with Approval Tests
-   Learners to experience the contrast with micro-assertions

In this Learning Hour, we focus on building simple code from scratch only.

## Agenda

-   Connect - 5m
-   Concept - explain + demo - 15m
-   Concrete - 30m (10m + 15m)
-   Conclusion - 5m

My first attempt took 1h 17m.

## Connect

Ask -

> How do you usually **structure** tests?
>
> How is a single test structured?
>
> How are multiple tests structured for a single module?

## Concept - Approval Tests Intro Explanation

See explanation frame [here](frames/explain.md).

## Concept - Demo

Demo: build the same code twice

1. The first time - with micro asserts
2. The second time - using approvals

I chose [FizzBuzz](https://sammancoaching.org/kata_descriptions/fizzbuzz.html) as the kata.
The starting position is [here](typescript/README.md)

## Concrete #1 - Build with Micro-Asserts

Prepare a starting position of the kata - the same kata you used for the Demo. [Here's the one I used](typescript/README.md).
Provide clear, step-by-step instructions - a checklist.
If learners are familiar with ensemble work, have then rotate after each completed step.
Emphasize that they should take their time, no need to complete all steps.
Stop and go to the next exercise when they get the point.

Example snippet of such a checklist:

> -   [ ] `fizzbuzz(3)` (Fizz)
>
>     -   [ ] add a new test / or new assert
>     -   [ ] see it fail
>     -   [ ] make it pass, with the smallest change possible
>     -   [ ] refactor if you like
>
> -   [ ] `fizzbuzz(4)` (just another number)
>
>     -   [ ] add a new test / or new assert
>     -   [ ] **challenge / optional:** see it fail
>     -   [ ] make it pass, with the smallest change possible
>     -   [ ] refactor if you like

The full checklist is [here](frames/exercise-use-asserts.md).

## Concrete #2 - Build with Approvals

Same as previous exercise, now with approvals.

See example checklist [here](frames/exercise-use-approvals.md).

## Conclusion

Ask -

> "how did that feel?"

And gather people's thoughts.
