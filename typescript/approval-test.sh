# run the approval test
if [ "$AI_GUIDED" = "true" ]; then
    bun run fizzbuzz.approvaltest.ts > fizzbuzz.received
    diff fizzbuzz.received fizzbuzz.approved || true
else
    bun run fizzbuzz.approvaltest.ts | bash verify.sh -t fizzbuzz
fi
