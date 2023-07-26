function solution(absolutes, signs) {
    return absolutes
        .map((num, i) => num * (signs[i] ? 1 : -1))
        .reduce((acc, cur) => acc + cur);
}
