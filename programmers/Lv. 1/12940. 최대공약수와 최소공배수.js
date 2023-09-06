function solution(n, m) {
    for (let i = Math.max(...[n, m]); i > 0; i--) {
        if (!(n % i === 0 && m % i === 0)) continue;
        return [i, n * m / i];
    }
}
