function solution(number) {
    const len = number.length - 4;
    return '*'.repeat(len) + number.substring(len);
}
