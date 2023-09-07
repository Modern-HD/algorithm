function solution(skill, skill_trees) {
    const map = [...skill].reduce((acc, char, i) => acc.set(char, skill.charAt(i - 1)), new Map());
    return skill_trees.reduce((acc, cur) => {
        const tmp = new Map(map.entries());
        for (let i = 0; i < cur.length; i++) {
            const prev = tmp.get(cur.charAt(i));
            if (tmp.has(prev)) return acc;
            tmp.delete(cur.charAt(i));
        }
        return ++acc;
    }, 0);
}
