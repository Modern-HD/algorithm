function solution(park, routes) {
    const offset = { x: 0, y: 0 };
    const moveX = ["E", "W"];
    const minus = ["W", "N"];
    let tmp;
    park.forEach((el, i) => {
        if ((tmp = el.indexOf("S")) > -1) {
            offset.x = tmp;
            offset.y = i;
        }
    })
    routes.forEach(el => {
        const [p, n] = el.split(" ");
        const area = moveX.includes(p) ? park[0].length - 1 : park.length - 1;
        const move = minus.includes(p) ? n * -1 : parseInt(n);
        if ((tmp = offset[moveX.includes(p) ? 'x' : 'y'] + move) < 0 || tmp > area) return;
        if (moveX.includes(p) && (minus.includes(p) ? park[offset.y].substring(offset.x + move, offset.x) : park[offset.y].substring(offset.x, offset.x + move + 1)).indexOf("X") > -1) return;
        if (!moveX.includes(p)) {
            let yVaild = '';
            park.forEach(el => {
                yVaild += el.charAt(offset.x);
            })
            if ((minus.includes(p) ? yVaild.substring(offset.y + move, offset.y) : yVaild.substring(offset.y, offset.y + move + 1)).indexOf("X") > -1) return;
        }
        offset[moveX.includes(p) ? 'x' : 'y'] += move;
    })
    return [offset.y, offset.x];
}
