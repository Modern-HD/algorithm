function solution(n, lost, reserve) {
    const lostSet = new Set(lost);
    const reserveSet = new Set(reserve);
    [...reserveSet.values()].forEach(num => {
        if (!lostSet.has(num)) return;
        lostSet.delete(num);
        reserveSet.delete(num);
    });
    for (let i = 1; i <= n; i++) {
        if (!lostSet.has(i)) continue;
        for (let j = i - 1; j <= i + 1; j += 2) {
            if (!reserveSet.has(j)) continue;
            lostSet.delete(i);
            reserveSet.delete(j);
            break;
        }
    }
    return n - lostSet.size;
}
