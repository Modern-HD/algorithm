function solution(numbers) {
    let answer = 0;
    const set = new Set(numbers);
    for (let i = 0; i < 10; i++) {
        if (!set.has(i)) answer += i;
    }
    return answer;
}
