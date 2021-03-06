/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
    let count = 0;
    let strVal = "";
    let res = {};
    
    function getStringVal (str) {
        const charCodeOfa = 97;
        let index = 0;
        let res = new Array(52);
        
        res.fill(0);
        
        for (let i = 0, len = str.length; i < len; i++) {
            index = str.charCodeAt(i) - charCodeOfa + 26 * (i % 2);

            if (res[index]) {
                res[index]++;
            } else {
                res[index] = 1;
            }
        }
        return res.join("");
    }
    
    for (let i = 0, len = A.length; i < len; i++) {
        strVal = getStringVal(A[i]);
        if (res[strVal]) {
            res[strVal]++;
        } else {
            res[strVal] = 1;
            count++;
        }
    }
    
    return count;
};
