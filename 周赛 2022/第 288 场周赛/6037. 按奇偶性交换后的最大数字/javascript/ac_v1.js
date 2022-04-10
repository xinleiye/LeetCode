/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function(num) {
    
    const splitNum = (num) => {
        let arr = [];
        while (num) {
            arr.unshift(num % 10);
            num = Math.floor(num / 10);
        }
        return arr;
    };
    const numArr = splitNum(num);
    const oddIndex = [];
    const evenIndex = [];
    
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2) {
            oddIndex.push(i);
        } else {
            evenIndex.push(i);
        }
    }
    oddIndex.sort((n1, n2) => numArr[n2] - numArr[n1]);
    evenIndex.sort((n1, n2) => numArr[n2] - numArr[n1]);

    let res = 0;
    for (const n of numArr) {
        let tmp;
        if (n % 2) {
            tmp = numArr[oddIndex.shift()];
        } else {
            tmp = numArr[evenIndex.shift()];
        }
        res = res * 10 + tmp;
    }
    
    return res;
};
