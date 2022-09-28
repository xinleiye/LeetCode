/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
    let res = 0;
    const validNum = [0, 0, 1, -1, -1, 1, 1, -1, 0, 1];

    for (let i = 1; i <= n; i++) {
        let diff = false;
        let valid = true;
        let num = i;

        while (num) {
            const last = num % 10;

            if (validNum[last] === -1) {
                valid = false;
                break;
            } else if (validNum[last] === 1) {
                diff = true;
            }
            num = (num - last) / 10;
        }
        if (diff && valid) {
            res++;
        }
    }

    return res;
};
