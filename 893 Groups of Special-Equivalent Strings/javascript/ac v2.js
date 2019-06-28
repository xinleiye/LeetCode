/**
 * @param {string[]} A
 * @return {number}
 * @result
 * Runtime: 76 ms, faster than 85.40% of JavaScript online submissions for Groups of Special-Equivalent Strings.
 * Memory Usage: 37.4 MB, less than 94.03% of JavaScript online submissions for Groups of Special-Equivalent Strings.
 */
var numSpecialEquivGroups = function(A) {
    let strVal = "";
    let res = new Map();
    
    function getStringVal (str) {
        let even = [];
        let odd = [];
        
        for (let i = 0, len = str.length; i < len; i++) {
            if (i % 2) {
                odd.push(str[i]);
            } else {
                even.push(str[i])
            }
        }
        return odd.sort().join("") + even.sort().join("");
    }
    
    for (let i = 0, len = A.length; i < len; i++) {
        strVal = getStringVal(A[i]);
        if (res.has(strVal)) {
            res.set(strVal, res.get(strVal) + 1)
        } else {
            res.set(strVal, 1);
        }
    }
    
    return res.size;
};
