function solution(name, yearning, photo) {
    const answer = [];
    const nameMap = new Map();
    name.forEach((el, i) => {
        nameMap.set(el, yearning[i]);
    })
    photo.forEach((el) => {
        let score = 0;
        let tmp;
        el.forEach(e => {
            (tmp = nameMap.get(e)) && (score += tmp);
        })
        answer.push(score);
    })
    return answer;
}