function solution(cards1, cards2, goal) {
    let flag = true;
    goal.forEach(str => {
        if (!flag) return;
        if (cards1[0] === str) {
            cards1.shift();
            return;
        }
        if (cards2[0] === str) {
            cards2.shift();
            return;
        }
        flag = false;
    })
    return flag ? 'Yes' : 'No';
}
