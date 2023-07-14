function solution(n) {
    let [before, after] = [0, 1];
    for (let i = 2; i <= n; i++) {
        const tmp = after;
        after += before;
        before = tmp;
        if (after > 1234567) after %= 1234567;
        if (before > 1234567) before %= 1324567;
    }
    return after;
}
