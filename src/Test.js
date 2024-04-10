var sample = 'test';
function fibonacci(n) {
    var a = 0, b = 1, c = 1;
    if (n == 0) return a;
    else if (n == 1) return b;
    else {
        for (var i = 2; i <= n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
    }
    return c;
}

for (var i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}


