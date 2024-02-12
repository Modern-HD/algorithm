function solution(begin, target, words) {
    const queue = [];
    let min = 0;
    const bfs = (str, cnt, idx, leftWords) => {
        if (str === target) return (min = cnt);
        if ([...str].reduce((acc, cur, i) => acc + (cur !== leftWords[idx].charAt(i)), 0) !== 1) return;
        const newArr = [...leftWords];
        newArr.splice(idx, 1);
        newArr.forEach((_, i) => queue.push([leftWords[idx], cnt + 1, i, newArr]));
    };
    words.forEach((_, i) => queue.push([begin, 0, i, [...words]]));
    while (queue.length > 0 && min === 0) {
        const shift = queue.shift();
        bfs(shift[0], shift[1], shift[2], shift[3]);
    }
    return min;
}
