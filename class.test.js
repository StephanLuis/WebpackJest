 const NewClass = require('./class');

let nc = new NewClass();

console.log(nc);

test('class property a should be "a"', () => {
    expect(nc.a).toBe("a");
  });