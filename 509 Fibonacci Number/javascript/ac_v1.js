/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    let f;
    let f0 = 0;
    let f1 = 1;

    if (N === 0) {
        return f0;
    }
    if (N === 1) {
        return f1;
    }

    for (let i = 2; i < N; i++) {
        f = f0;
        f0 = f1;
        f1 = f0 + f;
    }

    return f1 + f0;
};
