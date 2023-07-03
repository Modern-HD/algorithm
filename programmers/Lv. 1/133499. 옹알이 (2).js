function solution(babbling) {
    let answer = 0;
    const set = new Set(['aya', 'ye', 'woo', 'ma']);
    babbling.forEach(str => {
        let last = '';
        while(true) {
            const tmp = str.length;
            for (let i = 2; i < 4; i++) {
                const sepa = str.substring(0, i);
                if (last === sepa) return;
                if (!set.has(sepa)) continue;
                str = str.substring(i);
                last = sepa;
            }
            if (tmp === str.length) break;
        }
        if (str === '') answer++;
    });
    return answer;
}
