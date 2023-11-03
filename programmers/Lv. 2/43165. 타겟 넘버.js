function solution(numbers, target) {
    let cnt = 0;

    const dfs = arr => {
        if (arr.length === numbers.length) {
            const sum = arr.reduce((acc, cur, i) => acc + numbers[i] * (cur ? 1 : -1), 0);
            if (sum === target) cnt++;
            return;
        }
        dfs([...arr, false]);
        dfs([...arr, true]);
    };
    dfs([]);

    return cnt;
}
