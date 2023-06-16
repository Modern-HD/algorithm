function solution(s, skip, index) {
    let answer = '';
    const alphabet = [];
    for (let i = 97; i < 123; i++) {
        const char = String.fromCharCode(i);
        skip.indexOf(char) < 0 && alphabet.push(char);
    }
    [...s].forEach(char => {
        answer += alphabet[(alphabet.indexOf(char) + index) % alphabet.length];
    })
    return answer;
}
