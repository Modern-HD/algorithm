process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [n, m] = data.split(" ").map(str => Number(str));
    console.log(('*'.repeat(n) + '\n').repeat(m));
});
