function solution(today, terms, privacies) {
    const answer = [];
    const termMap = new Map(terms.map(str => str.split(' ')));
    let tmp = today.split('.').map(str => parseInt(str));
    const todayObj = new Date(tmp[0], tmp[1] + 1, tmp[2]);

    privacies.forEach((str, i) => {
        const [dateStr, type] = str.split(' ');
        tmp = dateStr.split('.').map(str => parseInt(str));
        const date = new Date(tmp[0], tmp[1] + 1, tmp[2]);
        date.setMonth(date.getMonth() + parseInt(termMap.get(type)));
        date <= todayObj && answer.push(i + 1);
    })

    return answer;
}
