# continuously run the approval test
ls fizzbuzz.ts fizzbuzz.approved fizzbuzz.approvaltest.ts | entr -c ./approval-test.sh
