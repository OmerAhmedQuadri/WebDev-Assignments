let a = 0;
let b = 1;


for (let i = 2; i < 100; i++) {
    let n = a + b;
    console.log(n);
    a = b;
    b = n;
}