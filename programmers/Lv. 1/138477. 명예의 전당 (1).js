function solution(k, score) {
    const answer = [];
    const frame = [];
    score.forEach(n => {
        frame.push(n);
        frame.sort((a, b) => a - b);
        frame.length > k && frame.shift();
        answer.push(frame[0]);
    });
    return answer;
}
