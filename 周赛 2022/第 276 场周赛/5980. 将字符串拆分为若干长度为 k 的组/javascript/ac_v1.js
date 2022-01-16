/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    const res = [];
    let index = 0;
    const total = s.length;

    while (index < total) {
        res.push(s.substring(index, index + k));
        index += k;
    }
    if (res[res.length - 1].length !== k) {
        let last = res.pop();
        
        for (let i = last.length; i < k; i++) {
            last += fill;
        }
        
        res.push(last);
    }

    return res;
};
