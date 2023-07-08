function solution(X, Y) {
    const partner = [];
    const map = new Map();
    [...X].forEach(char => {
        map.has(char)
            ? map.set(char, map.get(char) + 1)
            : map.set(char, 1);
    });
    [...Y].forEach(char => {
        if (map.get(char) > 0) {
            map.set(char, map.get(char) - 1);
            partner.push(char);
        }
    });
    partner.sort((a, b) => b - a);
    if (partner[0] === '0') partner.length = 1;
    return partner.join('') || '-1';
}
