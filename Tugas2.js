var s = '';
for (let i = 0; i < 10; i++) {
    for (let j = 10; j > i; j--) {
        s += ' *';
    }
    s += '\n';
}

console.log(s);