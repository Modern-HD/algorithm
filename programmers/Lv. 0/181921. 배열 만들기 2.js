function solution(l, r) {
    const answer = [-1];
    const arr = [false];
    let last = 0;
    const plus = (idx) => {
        if (arr[idx]) {
            idx === arr.length - 1 && arr.push(false);
            arr[idx] = false;
            plus(idx + 1);
        } else {
            arr[idx] = true;
        }
    }
    const add = () => {
        let str = '';
        for (let i = arr.length - 1; i >= 0; i--) {
            str += arr[i] ? '5' : '0';
        }
        const num = parseInt(str);
        if (num >= l && num <= r) {
            if (answer[0] === -1) answer.length = 0;
            answer.push(num);
        }
        last = num;
    }
    while (last <= r) {
        plus(0);
        add();
    }
    return answer;
}
