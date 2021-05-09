/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
 var minDays = function(bloomDay, m, k) {
    let res = -1;
    let bloomed = new Array(bloomDay.length).fill(false);
    let isM = (day, m) => {
        let pre = -1;

        for (let i = 0; i < bloomDay.length; i++) {
            bloomed[i] = bloomDay[i] <= day;
        }

        for (let i = 0; i < bloomed.length; i++) {
            // 未使用花朵的起始位置
            if (bloomed[i]) {
                if (pre === -1) {
                    pre = i;
                }
            } else {
                pre = -1;
                continue;
            }
            if ((i - pre + 1) === k) {
                m--;
                pre = -1;
                if (m === 0) {
                    return true;
                }
            }
        }

        return false;
    };
    let left = 1e9;
    let right = 1;

    bloomDay.forEach((val) => {
        right = Math.max(right, val);
        left = Math.min(left, val);
    });

    while (left <= right) {
        let mid = (left + right) >>> 1;

        if (isM(mid, m)) {
            res = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return res;
};
