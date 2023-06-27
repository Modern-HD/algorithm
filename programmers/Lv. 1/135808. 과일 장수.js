function solution(k, m, score) {
    let answer = 0;
    let min = Infinity;
    score.sort((a, b) => b - a);
    for (let i = 0; i < score.length - score.length % m; i++) {
        if (min > score[i]) min = score[i];
        if ((i + 1) % m !== 0) continue;
        answer += min * m;
        min = Infinity;
    }
    return answer;
}
