// let n = 29; 

// let isPrime = true;

// if (n < 2) {
//     isPrime = false;
// } else {
    
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }

// if (isPrime) {
//     console.log(n,' is a prime number.');
// } else {
//     console.log(n,' is not a prime number.');
// }



let check=7

let i=2
let flag=false

while(i<check){
    if(check%i==0){
        flag=true
    }
    i++
}

if(flag){
    console.log('not a prime')
}
else{
    console.log('prime')
}