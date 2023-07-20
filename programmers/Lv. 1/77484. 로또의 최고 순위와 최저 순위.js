function solution(lottos, win_nums) {
    const set = new Set(win_nums);
    let cnt = 0;
    let empty = 0;
    lottos.forEach(num => {
        if (num === 0) return empty++;
        set.has(num) && cnt++;
    });
    const rank = (num) => {
        const result = 7 - num;
        return result > 5 ? 6 : result;
    }
    return [rank(cnt + empty), rank(cnt)];
}
