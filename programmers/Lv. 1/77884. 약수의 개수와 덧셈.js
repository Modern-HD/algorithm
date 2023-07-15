function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        const sqrt = Math.sqrt(i);
        if (sqrt === Math.floor(sqrt)) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
