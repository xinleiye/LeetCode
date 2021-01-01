function findKthLargest (nums: number[], k: number): number {
    return quickSelect (nums, 0, nums.length - 1, nums.length - k);
};

function quickSelect (nums: number[], left: number, right: number, targetIndex: number): number {
    let index = randomPartition(nums, left, right);

    if (index === targetIndex) {
        return nums[index];
    } else {
        if (index < targetIndex) {
            return quickSelect(nums, index + 1, right, targetIndex);
        } else {
            return quickSelect(nums, left, index - 1, targetIndex);
        }
    }
}

function randomPartition (nums: number[], left: number, right: number): number {
    let pos: number = Math.floor(Math.random() * (right - left + 1)) + left; // 随机生成一个[left, right]之间的数

    swap(nums, right, pos);

    return partition(nums, left, right);
}

function partition (nums: number[], left: number, right: number): number {
    let tmp: number = nums[right];
    let pos: number = left;

    for (let i: number = left; i < right; i++) {
        if (nums[i] < tmp) {
            swap(nums, pos, i);
            pos++;
        }
    }
    swap(nums, pos, right);

    return pos;
}

function swap (nums: number[], index1: number, index2: number): void {
    let tmp: number = nums[index1];

    nums[index1] = nums[index2];
    nums[index2] = tmp;
}
