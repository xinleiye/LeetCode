/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    if (num < 10) {
        return num;
    }

    let res = 0;
    let length = 0;
    const numArr = [];
    const swap = (arr, i, j) => {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    };
    do {
        numArr.unshift(num % 10);
        num = Math.floor(num / 10);
        length++;
    } while (num)
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            swap(numArr, i, j);
            res = Math.max(Number(numArr.join("")), res);
            swap(numArr, j, i);
        }
    }

    return res;
};
