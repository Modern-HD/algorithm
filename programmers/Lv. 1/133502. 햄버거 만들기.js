function solution(ingredient) {
    let answer = 0;
    for (let i = 3; i < ingredient.length; i++) {
        if (ingredient[i] !== 1) continue;
        if (ingredient[i - 1] !== 3) continue;
        if (ingredient[i - 2] !== 2) continue;
        if (ingredient[i - 3] !== 1) continue;
        ingredient.splice(i - 3, 4);
        i -= 4;
        answer++;
    }
    return answer;
}
