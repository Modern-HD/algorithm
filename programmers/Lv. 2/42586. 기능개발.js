function solution(progresses, speeds) {
    let date = 0;
    let cnt = 0;
    return progresses
        .map((el, i) => {
            return Math.ceil((100 - el) / speeds[i]);
        })
        .reduce((arr, cur, i) => {
            if (date >= cur) cnt++;
            if (date < cur) {
                if (cnt) arr.push(cnt);
                cnt = 1;
                date = cur;
            }
            if (i === progresses.length - 1 && cnt) arr.push(cnt);
            return arr;
        }, []);
}
