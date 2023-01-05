bash $(
    ls \
        approval-test.sh \
        assert.sh \
        approval-test-watch.sh \
        assert-watch.sh \
        reset.sh \
        | fzf --preview 'head -n 1 {}'
)
