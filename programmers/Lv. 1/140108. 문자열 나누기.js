function solution(s) {
    let answer = 0;
    let [x, notX] = [0, 0];
    let target;
    [...s].forEach(char => {
        target ||= char;
        char === target ? x++ : notX++;
        if (x === notX) {
            answer++;
            [x, notX] = [0, 0];
            target = undefined;
        }
    });
    (x > 0 || notX > 0) && answer++;
    return answer;
}
