/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
    let res = 0;
    let restKMap = new Map();
    let sum = 0;

    restKMap.set(0, 0);
    A.forEach(num => {
        let rest;

        sum += num;
        rest = sum % K;
        if (rest < 0) {
            rest = K + rest;
        }
        if (restKMap.has(rest)) {
            let count = restKMap.get(rest);

            res += rest === 0 ? count + 1 : count;
            restKMap.set(rest, count + 1);
        } else {
            restKMap.set(rest, 1);
        }
    });

    return res;
};
