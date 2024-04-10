// const b = new Buffer.from('abcxyz');
const c = new Buffer.from('ABCDEFG');
c.write('other');
console.log(c.toString());

// console.log(b);