[← Exercise - Use Approvals](exercise-use-approvals.md) | [↑ Index](index.md) | [→ Conclusions](conclusions.md)

# Bonus: Two Approval Testing Styles

*Timebox: 5-10 minutes (if needed)*

## The Spectrum

Approval testing sits on a spectrum between two extremes:

### 1. "Golden Master" Style
- **Only approve correct expected results**
- Write the approved file manually with known-good output
- Some teams even write approved files before running tests
- Test fails until production code produces the exact expected output
- **Benefits**: Clear expectations, explicit about correctness
- **Use case**: When you know exactly what the output should be

### 2. "Evolutionary Baseline" Style  
- **Approve intermediate results to track evolution**
- Use approval mechanism to highlight each change
- Approve even incorrect results as stepping stones
- Each production code change shows up in the diff
- **Benefits**: See the journey, catch unexpected changes, easier incremental development
- **Use case**: Refactoring, exploratory development, legacy code

## Example Evolution

Starting with FizzBuzz:

**Step 1:** Approve `3 -> 3` (not correct, but baseline)
**Step 2:** Change code, see diff: `3 -> 3` becomes `3 -> Fizz`  
**Step 3:** Approve the new result

vs.

**Traditional:** Write approved file with `3 -> Fizz` upfront, test fails until code is correct

## When to Use Which?

- **Golden Master**: New features with clear requirements
- **Evolutionary**: Refactoring, characterization tests, incremental development
- **Hybrid**: Start evolutionary, evolve toward golden master

## Discussion Points

- Which style feels more natural to your team?
- How might this affect your TDD cycle?
- What are the risks of each approach?

[← Exercise - Use Approvals](exercise-use-approvals.md) | [↑ Index](index.md) | [→ Conclusions](conclusions.md)