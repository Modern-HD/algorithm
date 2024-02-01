function solution(phoneBook) {
    const set = new Set(phoneBook.map(n => n.toString()));
    const len = [...new Set([...set].map(str => str.length))];
    return [...set].every(str => {
        set.delete(str);
        const flag = len.every(l => !set.has(str.substring(0, l)));
        set.add(str);
        return flag;
    });
}
