let n=4 
let fact=1

if (n < 0) {
    console.log('not defined')
} 

else if (n === 0 || n === 1) {
    console.log(fact)
} 

else {
    fact=n
    for (let i = fact-1; i > 1; i--) {
        fact *= i;
    }

    console.log(fact)
}