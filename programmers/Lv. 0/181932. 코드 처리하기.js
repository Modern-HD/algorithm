function solution(code) {
    let str = '';
    let mode = false;
    for (let i = 0; i < code.length; i++) {
        const char = code.charAt(i);
        if (char === '1') {
            mode = !mode;
            continue;                
        };
        if ((!mode && i % 2 === 0) || (mode && i % 2 === 1)) {
            str += char;
        }
    }
    return str ? str : "EMPTY";
}