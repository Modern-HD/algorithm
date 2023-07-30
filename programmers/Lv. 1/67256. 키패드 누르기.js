function solution(numbers, main) {
    let answer = '';
    const hands = [10, 12];
    const map = new Map([
        [1, ['L', 0]], [4, ['L', 1]], [7, ['L', 2]], [10, ['L', 3]],
        [3, ['R', 0]], [6, ['R', 1]], [9, ['R', 2]], [12, ['R', 3]],
        [2, ['M', 0]], [5, ['M', 1]], [8, ['M', 2]], [0, ['M', 3]]
    ]);
    
    numbers.forEach(num => {
        const [hand, location] = map.get(num);
        if (hand !== 'M') {
            hands[hand === 'L' ? 0 : 1] = num;
            answer += hand;
            return;
        }
        const [left, right] = hands.map(n => Math.abs(
            location - map.get(n)[1]) - (map.get(n)[0] === 'M' ? 1 : 0)
        );
        if (left === right) {
            hands[main === 'left' ? 0 : 1] = num;
            answer += main === 'left' ? 'L' : 'R';
            return;
        }
        hands[(left - right) < 0 ? 0 : 1] = num;
        answer += (left - right) < 0 ? 'L' : 'R';
    });
    
    return answer;
}
