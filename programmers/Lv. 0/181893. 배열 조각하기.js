function solution(arr, query) {
    let newArr = [...arr];
    query.forEach((idx, i) => {
        if (i % 2 === 0) {
            newArr = newArr.slice(0, idx + 1);
        } else {
            newArr = newArr.slice(idx);
        }
    });
    return newArr;
}
