function solution(maps) {
    let min = -1;
    const queue = [];

    const bfs = ([x, y], cnt) => {
        if (!(maps[y] && maps[y][x])) return;
        if (x === maps[0].length - 1 && y === maps.length - 1) {
            min = cnt;
            queue.length = 0;
            return;
        }

        maps[y][x] = 0;

        queue.push([[x, y + 1], ++cnt]);
        queue.push([[x + 1, y], cnt]);
        queue.push([[x, y - 1], cnt]);
        queue.push([[x - 1, y], cnt]);
    };
    queue.push([[0, 0], 1]);

    while (queue.length > 0) {
        const [coords, cnt] = queue.shift();
        bfs(coords, cnt);
    }

    return min;
}
