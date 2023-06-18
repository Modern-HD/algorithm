function solution(t, p) {
    let cnt = 0;
    const pNum = parseInt(p);
    for (let i = 0; i < t.length - p.length + 1; i++) {
        pNum >= parseInt(t.substring(i, i + p.length)) && cnt++;   
    }
    return cnt;
}
