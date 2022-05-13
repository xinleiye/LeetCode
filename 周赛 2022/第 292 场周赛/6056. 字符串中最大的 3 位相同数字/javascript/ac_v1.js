/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let res = "";
    const total = num.length;
    const numArr = num.split("");

    for (let i = 2; i < total; i++) {
        if (numArr[i] === numArr[i - 1] && numArr[i] === numArr[i - 2]) {
            const str = numArr[i].repeat(3);
            if (str > res) {
                res = str;
            }
        }
    }
    
    return res;
};
