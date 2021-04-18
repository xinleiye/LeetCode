/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
 var getXORSum = function(arr1, arr2) {
    let res = 0;
    let xor1 = 0;

    arr1.forEach(val => {
        xor1 ^= val;
    });
    arr2.forEach(val => {
        res ^= (xor1 & val);
    });

    return res;
};
