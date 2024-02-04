/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    const numArr = num.toString().split("").map(n => Number(n));
    let maxIndex = numArr.length - 1;
    let index1 = -1;
    let index2 = -1;

    for (let i = numArr.length - 1; i >= 0; i--) {
        if (numArr[i] > numArr[maxIndex]) {
            maxIndex = i;
        } else if (numArr[i] < numArr[maxIndex]) {
            index1 = i;
            index2 = maxIndex;
        }
    }
    if (index1 >= 0) {
        swap(numArr, index1, index2);

        return Number(numArr.join(""));
    }

    return num;
};

function swap(arr, i, j) {
    const tmp = arr[i];

    arr[i] = arr[j];
    arr[j] = tmp;
};
