# continuously run the assert-based test
ls fizzbuzz.ts fizzbuzz.spec.ts | entr -c ./assert.sh
