function solution(x, n) {
    return [...Array(n).keys()].map(i => x * ++i);
}
