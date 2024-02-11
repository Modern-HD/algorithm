function solution(n, computers) {
    const set = new Set();
    const visited = [...Array(computers.length)].fill(false);
    const dfs = i => {
        if (visited[i]) return;
        visited[i] = true;
        computers[i].forEach((bool, idx) => bool && !visited[idx] && dfs(idx));
    };
    computers.forEach((_, i) => {
        dfs(i);
        set.add(visited.map(bool => (bool ? 't' : 'f')).join('-'));
        visited.fill(false);
    });
    return set.size;
}
