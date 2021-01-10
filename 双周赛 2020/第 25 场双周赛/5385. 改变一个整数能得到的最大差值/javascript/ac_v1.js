/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function(num) {
    let numArr = [];
    let num1;
    let num2;
    let getNum = (arr, src, tar) => {
        let res = 0;
        
        arr.forEach((val) => {
            if (val === src) {
                res = res * 10 + tar;
            } else {
                res = res * 10 + val;
            }
        });

        return res;
    };
    
    while (num > 0) {
        numArr.unshift(num % 10);
        num = (num - numArr[0]) / 10;
    }

    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] !== 9) {
            num1 = getNum(numArr, numArr[i], 9);
            break;
        }
    }
    if (!num1) {
        num1 = getNum(numArr, numArr[0], 9);;
    }

    if (numArr[0] > 1) {
        num2 = getNum(numArr, numArr[0], 1);
    } else {
        for (let i = 0; i < numArr.length; i++) {
            if (numArr[i] > 1) {
                num2 = getNum(numArr, numArr[i], 0);
                break;
            }
        }
    }
    if (!num2) {
        num2 = getNum(numArr, numArr[0], 1);;
    }

    return num1 - num2;
};
