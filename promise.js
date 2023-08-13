var a = 10;
var b = 0;

const promise = new Promise((resolve, rejects) => resolve(20));

promise.then((data) => console.log(a + data));
