/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
    const length = nums.length;
    const buff = new Array(k);
    const res = [];
    const getMid = (arr) => {
        const length = arr.length;

        if (length % 2) {
            return arr[(length - 1) / 2];
        } else {
            return (arr[length / 2 - 1] + arr[length / 2]) / 2;
        }
    };
    // val1：要删除的值；val2：新插入的值
    const reSort = (arr, val1, val2) => {
        let index;
        const length = arr.length;

        if (val1 === val2) {
            return;
        }
        for (let i = 0; i < length; i++) {
            if (arr[i] === val1) {
                index = i;
                break;
            }
        }

        arr[index] = val2;
        if (val1 < val2) {
            while (index + 1 < length && arr[index + 1] < arr[index]) {
                let tmp = arr[index + 1];

                arr[index + 1] = arr[index];
                arr[index] = tmp;
                index++;
            }
        } else {
            while (index >= 1 && arr[index] < arr[index - 1]) {
                let tmp = arr[index - 1];

                arr[index - 1] = arr[index];
                arr[index] = tmp;
                index--;
            }
        }
    };

    for (let i = 0; i < k; i++) {
        buff[i] = nums[i];
    }
    buff.sort((val1, val2) => {
        return val1 - val2;
    });

    res.push(getMid(buff));
    for (let i = k; i < length; i++) {
        reSort(buff, nums[i - k], nums[i]);
        res.push(getMid(buff));
    }

    return res;
};
