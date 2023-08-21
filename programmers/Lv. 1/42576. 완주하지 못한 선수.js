function solution(participant, completion) {
    const map = new Map();
    completion.forEach(c => map.has(c) ? map.set(c, map.get(c) + 1) : map.set(c, 1));
    return participant.filter(p => !(map.get(p) > 0 && map.set(p, map.get(p) - 1)))[0];
}
