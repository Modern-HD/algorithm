function solution(dartResult) {
    const round = [];
    const bonus = { 'S': 1, 'D': 2, 'T': 3 };
    let tmp = {};
    [...dartResult].forEach((char, i, arr) => {
        if ((/[0-9]/).test(char)) {
            if (!(/[0-9]/).test(arr[i - 1]) && i > 0) {
                round.push({...tmp});
                tmp = {};
            }
            tmp.s = parseInt(tmp.s ? tmp.s + char : char);
            return;
        }
        if ((/[S|D|T]/).test(char)) return tmp.b = char;
        if ((/[*|#]/).test(char)) return tmp.o = char;
    });
    round.push({...tmp});
    return round.reduce((acc, {s, b, o}, i) => {
        let score = s;
        score **= bonus[b];
        if (o === '*') score *= 2;
        if (round[i + 1] && round[i + 1].o === '*') score *= 2;
        if (o === '#') score *= -1;
        return acc + score;
    }, 0)
}
