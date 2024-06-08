function fibonacci(n) {
    if (n <= 1) {
        return n; 
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2); 
    }
}

let n = parseInt(prompt("Enter the value of n: "));
console.log("The " + n + "th Fibonacci number is: " + fibonacci(n));
