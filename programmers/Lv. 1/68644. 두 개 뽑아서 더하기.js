function solution(numbers) {
    const set = new Set();
    numbers.forEach((n1, i) => {
        if (i === numbers.length - 1) return;
        numbers.slice(i + 1).forEach(n2 => {
            set.add(n1 + n2); 
        });
    });
    return [...set.values()].sort((a, b) => a - b);
}
