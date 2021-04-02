/**
 * @param {number} N
 * @return {number}
 */
 var clumsy = function(N) {
    let res = 0;
    const stack = [];
    // 0=>*; 1=>/; 2=>+; 3=>-
    let opIndex = 0;

    stack[0] = N;
    N--;
    while (N) {
        let num = stack.pop();
        const opType = opIndex % 4;

        if (opType === 0) {
            stack.push(num * N);
        } else if (opType === 1) {
            stack.push(Math.floor(num / N));
        } else {
            stack.push(num, N);
        }

        N--;
        opIndex++;
    }

    res = stack[0];
    for (let i = 1; i < stack.length; i++) {
        if (i % 2) {
            res += stack[i];
        } else {
            res -= stack[i];
        }
    }

    return res;
};
