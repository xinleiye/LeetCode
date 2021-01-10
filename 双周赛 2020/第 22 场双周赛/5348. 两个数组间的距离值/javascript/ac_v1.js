/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let res = 0;
    
    arr1.forEach(val1 => {
        let got = true;

        for (let i = 0, len = arr2.length; i < len; i++) {
            if (Math.abs(val1 - arr2[i]) <= d) {
                got = false;
            }
            if (!got) {
                break;
            }
        }
        if (got) {
            res++;
        }
    });

    return res;
};
