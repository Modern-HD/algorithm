function solution(answers) {
    const score = [0, 0, 0];
    const giveUp = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    answers.forEach((num, i) => {
        giveUp.forEach((arr, j) => {
            arr[i % arr.length] === num && score[j]++;
        });
    });
    const max = Math.max(...score);
    return score
        .map((s, i) => ({ s, i }))
        .filter(({s}) => s === max)
        .map(({i}) => ++i);
}
