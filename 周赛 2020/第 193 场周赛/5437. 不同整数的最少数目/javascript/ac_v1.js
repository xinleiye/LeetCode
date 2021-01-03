/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    let countMap = new Map();
    let arrNo2 = [];

    // 统计每个数字的数量
    arr.forEach(val => {
        if (countMap.has(val)) {
            countMap.set(val, countMap.get(val) + 1);
        } else {
            countMap.set(val, 1);
            arrNo2.push(val);
        }
    });

    // 计数排序
    arrNo2.sort((val1, val2) => {
        return countMap.get(val1) - countMap.get(val2);
    });

    // 从数量少的元素开始删除
    for (let i = 0; i < arrNo2.length; i++) {
        let count = countMap.get(arrNo2[i]);

        if (k >= count) {
            countMap.delete(arrNo2[i]);
            k -= count;
        } else {
            countMap.set(arrNo2[i], count - k);
            break;
        }
    }

    return countMap.size;
};
