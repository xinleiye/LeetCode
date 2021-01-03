/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    let res = 0;
    let mod = 1e9 + 7;
    let count1Arr = [];
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "1") {
            count++;
        } else {
            count1Arr.push(count);
            count = 0;
        }
    }
    if (count > 0) {
        count1Arr.push(count);
    }

    count1Arr.forEach(val => {
        res += (1 + val) * val / 2;
        res = res % mod;
    });

    return res;
};
