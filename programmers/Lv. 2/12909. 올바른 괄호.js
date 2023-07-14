function solution(s) {
    let open = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        if (char === '(') {
            open++;
            continue;
        }
        if (--open < 0) return false;
    }
    return open === 0;
}
