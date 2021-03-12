

function add(a,b){
let  nUmberA = parseInt(a);
let  nUmberB = parseInt(b);
return (nUmberA + nUmberB);
}

function subtract(a,b) {
    let  nUmberA = parseInt(a);
    let  nUmberB = parseInt(b);
return (nUmberA - nUmberB );
}

function multiply(a,b) {
    let  nUmberA = parseInt(a);
    let  nUmberB = parseInt(b);
return (nUmberA * nUmberB );
}

function divide(a,b) {
    let  nUmberA = parseInt(a);
    let  nUmberB = parseInt(b);
    return (nUmberA / nUmberB  );
}

 console.log (add(a,b));
 console.log (subtract(a,b));
 console.log (multiply(a,b));
 console.log (divide(a,b));

function increment(n) {
    let  nUmberN = parseInt(n);

    return ( nUmberN + 1);
}

function decrement(n) {
    let  nUmberN = parseInt(n);

    return (nUmberN - 1);
}

function makeInt(n) {

 return (parseInt(n, 10));
}

function preserveDecimal(n) {

    return (parseFloat(n,10));
}
 