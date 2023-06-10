function solution(n, m, section) {
    let cnt = 1;
    let idx = section[0] + m - 1;
    const wall = [];
    
    for (let i = 0; i < n; i++) {
        wall.push(!section.includes(i + 1) || i < m);
    }
    
    while (true) {
        let end = true;
        for (let i = idx; i < n; i++) {
            if (!wall[i]) {
                end = false;
                idx = i;
                break;
            }
        }
        
        if (end) break;
        
        cnt++;
        for (let i = 0; i < m; i++) {
            wall[idx++] = true;
        }
    }
    
    return cnt;
}