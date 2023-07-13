function solution(n) {
    const cnt = n.toString(2).split('1').length - 1;
    while (true) if (((++n).toString(2).split('1').length - 1) === cnt) return n;
}
