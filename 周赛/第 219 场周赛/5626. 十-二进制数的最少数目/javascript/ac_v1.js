/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let res = 0;
    
    for (let i = 0; i < n.length; i++) {
        res = Math.max(res, parseInt(n[i], 10));
    }
    
    return res;
};
