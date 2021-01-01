/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
    let res = 0;
    let restK = new Array(K).fill(0);
    let sum = 0;

    A.forEach(num => {
        let rest;

        sum += num;
        rest = sum % K;
        if (rest < 0) {
            rest = K + rest;
        }
        res += rest === 0 ? restK[rest] + 1 : restK[rest];
        restK[rest]++;
    });

    return res;
};
