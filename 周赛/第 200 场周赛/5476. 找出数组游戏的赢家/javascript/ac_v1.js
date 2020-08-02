/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function(arr, k) {
    let res = 0;
    let wins = 0;
    // 指针 1: 当前较大的数
    let winner = arr[0];
    // 指针 2: 要比较的数的位置
    let currentIndex = 1

    // k 大于 arr.length 时, 返回 arr 中的最大值
    if (arr.length <= k) {
        arr.forEach(val => {
            if (val > res) {
                res = val;
            }
        });
        return res;
    }

    while (true) {
        if (winner > arr[currentIndex]) {
            wins++;
        } else {
            winner = arr[currentIndex];
            wins = 1;
        }
        if (wins === k) {
            res = winner;
            break;
        }
        currentIndex++;
        if (currentIndex >= arr.length) {
            currentIndex = 1;
        }
    }
    
    return res;
};
