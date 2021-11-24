/**
 * @param {number[]} cards
 * @param {number} cnt
 * @return {number}
 */
var maxmiumScore = function(cards, cnt) {
    let res = 0;
    const odd = [];
    const oddSum = [];
    const even = [];
    const evenSum = [];

    cards.forEach(val => {
        if (val % 2) {
            odd.push(val);
        } else {
            even.push(val);
        }
    });
    if (odd.length) {
        odd.sort((val1, val2) => {
            return val2 - val1;
        });
        oddSum[0] = odd[0];
        for (let i = 1; i < odd.length; i++) {
            oddSum[i] = oddSum[i - 1] + odd[i];
        }
    }
    if (even.length) {
        even.sort((val1, val2) => {
            return val2 - val1;
        });
        evenSum[0] = even[0];
        for (let i = 1; i < even.length; i++) {
            evenSum[i] = evenSum[i - 1] + even[i];
        }
    }
    // 没有奇数
    if (!odd.length) {
        return evenSum[cnt - 1];
    }
    // 没有偶数
    if (!even.length) {
        return cnt % 2 ? 0 : oddSum[cnt - 1];
    }

    for (let oddCount = 0; oddCount <= cnt; oddCount += 2) {
        let sum = 0;
        const evenCount = cnt - oddCount;

        if (evenCount <= even.length && oddCount <= odd.length) {
            sum += evenCount > 0 ? evenSum[evenCount - 1] : 0;
            sum += oddCount > 0 ? oddSum[oddCount - 1] : 0;
            res = Math.max(res, sum);
        }
    }

    return res;
};
