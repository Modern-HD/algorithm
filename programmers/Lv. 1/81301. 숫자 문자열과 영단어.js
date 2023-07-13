function solution(s) {
    let answer = '';
    const numReg = /^[0-9]+$/;
    const map = new Map();
    const word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    word.forEach((str, i) => map.set(str, i));
    
    let start = -1;
    for (let i = 0; i < s.length; i++) {
        if (numReg.test(s.charAt(i))) {
            answer += s.charAt(i);
            continue;
        }
        if (start === -1) {
            start = i++;
            continue;
        };
        if (!map.has(s.substring(start, i + 1))) continue;
        answer += map.get(s.substring(start, i + 1));
        start = -1;
    }
    
    return parseInt(answer);
}
