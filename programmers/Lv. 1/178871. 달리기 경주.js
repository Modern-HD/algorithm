function solution(players, callings) {
    const map = new Map();
    const rank = [...players];
    players.forEach((el, i) => {
        map.set(el, i);
    })
    callings.forEach(el => {
        const callRank = map.get(el);
        map.set(el, callRank - 1);
        const takenName = rank[callRank - 1];
        map.set(takenName, callRank);
        rank[callRank] = takenName;
        rank[callRank - 1] = el;
    })
    return rank;
}