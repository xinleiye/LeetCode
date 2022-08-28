/**
 * @param {string} num
 * @return {string}
 */
var largestPalindromic = function(num) {
    const numArr = new Array(10).fill(0);
    const preHalf = [];
    const lastHalf = [];
    let oddNum = -1;

    for (const n of num) {
        numArr[n]++;
    }
    for (let i = 9; i > 0; i--) {
        const count = numArr[i];

        if (count > 0) {
            const cur = String(i).repeat(Math.floor(count / 2));

            if (cur.length) {
                preHalf.push(cur);
                lastHalf.unshift(cur);
            }
            if (count % 2 === 1 && oddNum === -1) {
                oddNum = i;
            }
        }
    }
    if (preHalf.length === 0) {
        return String(oddNum === -1 ? 0 : oddNum);
    }
    if (numArr[0] > 0) {
        const cur = String(0).repeat(Math.floor(numArr[0] / 2));

        if (preHalf.length) {
            preHalf.push(cur);
            lastHalf.unshift(cur);
        }
        if (numArr[0] % 2 === 1 && oddNum === -1) {
            oddNum = 0;
        }
    }
    if (oddNum > -1) {
        preHalf.push(String(oddNum));
    }

    return `${preHalf.join("")}${lastHalf.join("")}`;
};
