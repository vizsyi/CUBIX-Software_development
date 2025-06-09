//const fibonacciBtn = document.getElementById("fibonaccibtn");
//fibonacciBtn.onclick(() => printFibonacci());


function generateFibonacci(count) {
    if (count < 1) throw new RangeError("Érvénytelen Fibonacci paraméter");

    let fib = [0, 1], noUse;

    if (count = 9) console.log("Ez a kedvenc számom!");

    if (count > 2){
    for (i = 3; i <= count; i++){
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    }
    else {
    fib.length = count;
    }

    return fib;
}

function printFibonacci(){
    const count = parseInt(document.getElementById("count").value);
    const output = document.getElementById("output");

    if (isNaN(count) || count < 1) {
        output.textContent = 'Kérlek, adj meg egy pozitív egész számot.';
        return;
    }

    output.textContent = generateFibonacci(count).join(", ");
}
