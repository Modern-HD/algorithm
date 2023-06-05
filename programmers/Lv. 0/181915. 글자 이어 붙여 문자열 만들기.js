function solution(my_string, index_list) {
    let answer = '';
    index_list.forEach(el => {
        answer += my_string.charAt(el)
    })
    return answer;
}