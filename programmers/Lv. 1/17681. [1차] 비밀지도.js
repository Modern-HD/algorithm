function solution(n, arr1, arr2) {
    const answer = [];
    arr1.forEach((num, i) => {
        let str = '';
        const [ar1, ar2] = [num, arr2[i]].map(num => num.toString(2).padStart(n, '0'));
        for (let j = 0; j < n; j++) {
            str += ar1.charAt(j) === '1' || ar2.charAt(j) === '1' ? '#' : ' ';
        }
        answer.push(str);
    });
    return answer;
}
