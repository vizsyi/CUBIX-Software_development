//const fibonacciBtn = document.getElementById("fibonaccibtn");
//fibonacciBtn.onclick(() => printFibonacci());

function generateFibonacci(count) {
    if (count < 1) throw new RangeError("Érvénytelen Fibonacci paraméter");

    const fib = [0, 1];

    if (count > 2) {
        for (let i = 3; i <= count; i++) {
            fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
        }
    } else {
        fib.length = count;
    }

    return fib;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function printFibonacci() {
    const count = parseInt(document.getElementById("count").value);
    const output = document.getElementById("output");

    if (isNaN(count) || count < 1) {
        output.textContent = "Kérlek, adj meg egy pozitív egész számot.";
        return;
    }

    output.textContent = generateFibonacci(count).join(", ");
}
