function solution(keymap, targets) {
    const answer = [];
    const map = new Map();
    for (let i = 65; i < 91; i++) {
        const char = String.fromCharCode(i);
        let min = Infinity;
        keymap.forEach(btn => {
            const at = btn.indexOf(char);
            if (at > -1 && at < min) min = at;
        })
        min !== Infinity && map.set(char, min + 1);
    }
    targets.forEach(str => {
        let cnt = 0;
        [...str].forEach(char => {
            if (!(cnt || cnt === 0)) return;
            cnt += map.get(char);
        })
        cnt ? answer.push(cnt) : answer.push(-1);
    })
    return answer;
}
