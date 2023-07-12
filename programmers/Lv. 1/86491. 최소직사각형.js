function solution(sizes) {
    let [xMax, yMax] = [-Infinity, -Infinity];
    sizes.forEach(arr => {
        const [x, y] = arr.sort((a, b) => a - b);
        if (xMax < x) xMax = x;
        if (yMax < y) yMax = y;
    });
    return xMax * yMax;
}
