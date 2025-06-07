import fizzbuzz from "./fizzbuzz.js";

const log = console.log;

log("fizzbuzz");

for (let n = 1; n <= 3; n++) {
    log(`${n} -> ${fizzbuzz(n)}`);
}
