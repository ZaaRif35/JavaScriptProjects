function verificaParitate(numar) {
    if (numar % 2 === 0) {
        console.log("Numărul este par");
    } else {
        console.log("Numărul este impar");
    }
}

function calificativ(nota) {
    if (nota >= 9) console.log("Excelent");
    else if (nota >= 7) console.log("Bine");
    else if (nota >= 5) console.log("Satisfăcător");
    else console.log("Insuficient");
}


function anotimp(luna) {
    if ([12, 1, 2].includes(luna)) console.log("Iarnă");
    else if ([3, 4, 5].includes(luna)) console.log("Primăvară");
    else if ([6, 7, 8].includes(luna)) console.log("Vară");
    else if ([9, 10, 11].includes(luna)) console.log("Toamnă");
    else console.log("Lună invalidă");
}

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

let j = 1;
do {
    if (j % 2 !== 0) console.log(j);
    j++;
} while (j <= 15);

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

let sumaPare = 0;
for (let i = 2; i <= 20; i += 2) {
    sumaPare += i;
}
console.log("Suma numerelor pare:", sumaPare);

let fib = [0, 1];
for (let i = 2; i < 10; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}
console.log("Fibonacci:", fib);

for (let i = 0; i < 5; i++) {
    console.log("*****");
}

function multipli(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num * i);
    }
}

function estePrim(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function inverseaza(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

function numaraCifre(num) {
    return num.toString().length;
}

function triunghi(n) {
    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(i));
    }
}

function estePalindrom(num) {
    let str = num.toString();
    return str === str.split('').reverse().join('');
}
