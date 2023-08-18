function solution(array, commands) {
    return commands.map(cmds => array.slice(cmds[0] - 1, cmds[1]).sort((a, b) => a - b)[cmds[2] - 1]);
}
