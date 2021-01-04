/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    let f1 = 0;
    let f2 = 1;

    if (N === 0) {
        return f1;
    }
    if (N === 1) {
        return f2;
    }
    for (let i = 2; i < N; i++) {
        let f = f1 + f2;

        f1 = f2;
        f2 = f;
    }

    return f1 + f2;
};
