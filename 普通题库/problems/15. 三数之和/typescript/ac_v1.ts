function threeSum(nums: number[]): number[][] {
    let res: number[][] = [];
    let left:number;
    let right: number;

    if (nums.length < 3) {
        return [];
    }

    nums.sort((val1: number, val2: number): number => {
        return val1 - val2;
    });

    for (let i: number = 0; i < nums.length && nums[i] <= 0; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        left = i + 1;
        right = nums.length - 1;
        while (left < right) {
            let sum = nums[left] + nums[right] + nums[i];

            if (sum === 0) {
                res.push(new Array(nums[i], nums[left], nums[right]));
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                left++;
                right--;
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }

    return res;
};