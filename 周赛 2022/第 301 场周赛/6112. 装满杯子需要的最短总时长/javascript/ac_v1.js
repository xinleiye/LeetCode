/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
    let res = 0;
    let [m1, m2, m3] = amount.sort((a1, a2) => a2 - a1);
    
    while (m1 > 0 || m2 > 0 || m3 > 0) {
        if (m2 > 0) {
            m2--;
        }
        m1--;
        res++;
        [m1, m2, m3] = new Array(m1, m2, m3).sort((a1, a2) => a2 - a1);
    }
    
    return res;
};
