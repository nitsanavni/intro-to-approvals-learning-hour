const isDivisableBy = (n: number, d: number): boolean => n % d == 0;

// 3 - Fizz
// 5 - Buzz
// 7 - Whizz
// 11 - Bang

export const fizzbuzz = (n: number) => {
    if (isDivisableBy(n, 3 * 5 * 7)) {
        return "FizzBuzzWhizz";
    }

    if (isDivisableBy(n, 15)) {
        return "FizzBuzz";
    }

    if (isDivisableBy(n, 21)) {
        return "FizzWhizz";
    }

    if (isDivisableBy(n, 35)) {
        return "BuzzWhizz";
    }

    if (isDivisableBy(n, 3)) {
        return "Fizz";
    }

    if (isDivisableBy(n, 5)) {
        return "Buzz";
    }

    if (isDivisableBy(n, 7)) {
        return "Whizz";
    }

    return n;
};

export default fizzbuzz;
