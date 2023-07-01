function solution(food) {
    let [left, right] = ['', ''];
    for (let i = 1; i < food.length; i++) {
        if (food[i] % 2 !== 0) food[i]--;
        for (let j = 0; j < food[i] / 2; j++) {
            left += i;
            right = i + right;
        }
    }
    return left + '0' + right;
}
