function solution(id_list, report, k) {
    const answer = [];
    const map = new Map();
    id_list.forEach(id => {
        map.set(id, {
            receive: new Set(),
            mail: 0
        });
    });
    report.forEach(str => {
        const [user, target] = str.split(' ');
        map.get(target).receive.add(user);
    });
    map.forEach(val => {
        if (val.receive.size < k) return;
        val.receive.forEach(user => {
            map.get(user).mail++;
        });
    });
    map.forEach(val => {
        answer.push(val.mail);
    }); 
    return answer;
}