function solution(targets) {
    let answer = 1;
    let min = Infinity;
    let max = -Infinity;
    const map = new Map();
    targets.forEach(arr => {
        if (arr[0] < min) min = arr[0]; 
        if (arr[0] > max) max = arr[0];
        if (!map.has(arr[0])) return map.set(arr[0], arr[1]);
        map.get(arr[0]) > arr[1] && map.set(arr[0], arr[1]);
    });
    let limit = map.get(min);
    for (let i = min; i <= max; i++) {
        if (!map.has(i)) continue;
        if (limit > map.get(i)) limit = map.get(i);
        if (limit <= i) {
            answer++;
            limit = map.get(i);
            continue;
        }
    }
    return answer;
}
