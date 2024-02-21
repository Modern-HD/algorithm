function solution(priorities, location) {
    let cnt = 0;
    const indexing = priorities.map((n, i) => ({ n, i }));
    const sort = priorities.sort((a, b) => b - a);
    while (true) {
        const shift = indexing.shift();
        if (shift.n < sort[0]) {
            indexing.push(shift);
            continue;
        }
        cnt++;
        if (shift.i === location) return cnt;
        sort.shift();
    }
}
