function solution(survey, choices) {
    let answer = '';
    const map = new Map();
    const indicators = [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']];
    indicators.forEach(arr => {
        arr.forEach(char => map.set(char, 0)); 
    });
    survey.forEach((str, i) => {
        const choice = choices[i] - 4;
        if (choice === 0) return;
        const indicator = str.charAt(choice > 0 ? 1 : 0);
        map.set(indicator, map.get(indicator) + Math.abs(choice));
    });
    indicators.forEach(arr => {
        answer += map.get(arr[0]) >= map.get(arr[1]) ? arr[0] : arr[1];
    });
    return answer;
}
