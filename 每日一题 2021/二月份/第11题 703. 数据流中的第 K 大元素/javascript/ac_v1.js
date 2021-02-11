/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    const length = Math.min(k, nums.length);

    this.buff = new Array(k).fill(Number.MIN_SAFE_INTEGER);
    // 升序
    nums.sort((val1, val2) => {
        return val1 - val2;
    });
    for (let i = 0; i < length; i++) {
        this.buff[k - 1 - i] = nums[nums.length - 1 - i];
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    let left = 0;
    let right = this.buff.length - 1;

    while (left <= right) {
        let mid = (left + right) >>> 1;

        if (this.buff[mid] > val) {
            right = mid - 1;
        } else if (this.buff[mid] < val) {
            left = mid + 1;
        } else {
            left = mid;
            break;
        }
    }

    for (let i = 1; i < left; i++) {
        this.buff[i - 1] = this.buff[i];
    }

    this.buff[left - 1] = val;

    return this.buff[0];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
