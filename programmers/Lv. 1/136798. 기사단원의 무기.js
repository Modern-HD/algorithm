function solution(number, limit, power) {
    let answer = 0;
    for (let i = 1; i <= number; i++) {
        const set = new Set();
        for (let j = 1; j <= Math.sqrt(i) && set.size <= limit; j++) {
            if (i % j !== 0) continue;
            set.add(j);
            set.add(i/j);
        }
        answer += set.size > limit ? power : set.size;
    }
    return answer;
}
