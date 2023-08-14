function solution(N, stages) {
    const arr = [];
    for (let i = 1; i <= N; i++) {
        const challenge = stages.filter(n => n >= i);
        arr.push({ 
            stage: i,
            clear: stages.filter(n => n > i).length / challenge.length 
        });
    }
    const sort = (a, b) => {
        const sub = a.clear - b.clear;
        if (sub !== 0) return sub;
        return a.stage - b.stage;
    }
    return arr.sort(sort).map(({stage}) => stage);
}
