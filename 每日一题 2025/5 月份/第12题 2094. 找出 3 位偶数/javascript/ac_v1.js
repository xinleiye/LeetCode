/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    const numCount = new Array(10).fill(0);
    for (const n of digits) {
        numCount[n]++;
    }

    const res = [];
    for (let i = 100; i < 1000; i += 2) {
        let valid = true;
        let cur = i;
        const nCount = new Array(10).fill(0);

        while (cur) {
            const n = cur % 10;

            nCount[n]++;
            if (nCount[n] > numCount[n]) {
                valid = false;
                break;
            }
            cur = (cur - n) / 10;
        }
        if (valid) {
            res.push(i);
        }
    }

    return res;
};
