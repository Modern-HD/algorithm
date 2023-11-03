function solution(k, dungeons) {
    let max = 0;

    getPermutation(dungeons.length).forEach(idxArr => {
        let fatigue = k;
        let cnt = 0;
        for (let i = 0; i < idxArr.length; i++) {
            const dungeon = dungeons[idxArr[i]];
            if (dungeon[0] > fatigue) continue;
            fatigue -= dungeon[1];
            if (fatigue < 0) break;
            cnt++;
        }
        if (max < cnt) max = cnt;
    });

    return max;
}

function getPermutation(n) {
    const numbers = [...Array(n)].map((_, i) => i);
    const permutation = [];

    const permute = (arr, other) => {
        if (other.length === 1) return permutation.push([...arr, ...other]);
        for (let i = 0; i < other.length; i++) {
            permute([...arr, other[i]], [...other.slice(0, i), ...other.slice(i + 1, other.length)]);
        }
    };

    permute([], numbers);

    return permutation;
}
