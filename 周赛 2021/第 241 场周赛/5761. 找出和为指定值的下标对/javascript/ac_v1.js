/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function(nums1, nums2) {
    const nums2Map = new Map();

    this.nums1 = nums1;
    this.nums1.sort((val1, val2) => {
        return val1 - val2;
    });

    this.nums2 = nums2;
    nums2.forEach((val, index) => {
        if (nums2Map.has(val)) {
            nums2Map.get(val).add(index);
        } else {
            nums2Map.set(val, new Set().add(index));
        }
    });
    this.nums2Map = nums2Map;
};


/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
    const originVal = this.nums2[index];
    const originSet = this.nums2Map.get(this.nums2[index]);
    const targetVal = this.nums2[index] + val;

    this.nums2[index] += val;
    if (originSet.size === 1) {
        this.nums2Map.delete(originVal);
    } else {
        originSet.delete(index);
    }
    if (this.nums2Map.has(targetVal)) {
        this.nums2Map.get(targetVal).add(index);
    } else {
        this.nums2Map.set(targetVal, new Set().add(index));
    }
};

/** 
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
    let res = 0;
    const length = this.nums1.length;

    for (let i = 0; i < length; i++) {
        const target = tot - this.nums1[i];

        if (this.nums1[i] > tot) {
            break;
        }
        if (this.nums2Map.has(target)) {
            res += this.nums2Map.get(target).size;
        }
    }

    return res;
};

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */
