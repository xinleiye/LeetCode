/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    let res = [];
    let indexArr = new Array(nums.length);
    
    for (let i = 0; i < nums.length; i++) {
        indexArr[i] = i;
    }
    
    indexArr.sort((val1, val2) => {
        return nums[val1] - nums[val2];
    });

    for (let i = 0; i < l.length; i++) {
        let stack = [];

        res[i] = true;
        for (let j = 0; j < indexArr.length; j++) {
            if (indexArr[j] >= l[i] && indexArr[j] <= r[i]) {
                stack.push([nums[indexArr[j]]]);
                if (stack.length >= 3) {
                    if ((stack[stack.length - 1] - stack[stack.length - 2]) !== (stack[stack.length - 2] - stack[stack.length - 3])) {
                        res[i] = false;
                        break;
                    }
                }
            }
        }
    }

    return res;
};
