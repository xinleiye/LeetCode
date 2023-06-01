/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
var maximumTastiness = function(price, k) {
    price.sort((p1, p2) => p1 -p2);

    let left = 0;
    let right = price[price.length - 1] - price[0];
    const check = (arr, count, boundry) => {
        let pre = arr[0];
        const total = arr.length;
        let num = 1;
        for (let i = 1; i < total; i++) {
            if (arr[i] - pre >= boundry) {
                pre = arr[i];
                num++;
            }
        }

        return num >= count;
    };
    while (left < right) {
        const mid = left + Math.ceil((right - left) / 2);
        if (check(price, k, mid)) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }

    return left;
};
