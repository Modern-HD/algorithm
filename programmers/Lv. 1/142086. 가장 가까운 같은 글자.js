function solution(s) {
    const answer = [];
    const map = new Map();
    [...s].forEach((char, i) => {
        answer.push(map.has(char) ? i - map.get(char) : -1);
        map.set(char, i);
    });
    return answer;
}
