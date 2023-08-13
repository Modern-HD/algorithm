function solution(board, moves) {
    const box = [];
    const basket = [];
    let cnt = 0;
    board.reverse().forEach((arr) => {
        arr.forEach((num, i) => {
            if (!box[i]) box[i] = [];
            if (num !== 0) box[i].push(num);
        });
    });
    moves.forEach((num) => {
        const choose = box[num - 1].pop();
        if (!choose) return;
        if (basket.at(-1) === choose) {
            cnt += 2;
            return basket.pop();
        }
        basket.push(choose);
    });
    return cnt;
}
