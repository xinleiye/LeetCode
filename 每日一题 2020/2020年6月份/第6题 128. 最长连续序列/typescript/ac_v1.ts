function longestConsecutive(nums: number[]): number {
    let res = 0;
    let numSet: Set<number> = new Set();

    nums.forEach(val => {
        numSet.add(val);
    });

    numSet.forEach(val => {
        let add = 1;

        if (numSet.has(val - 1)) {
            return false;
        }

        while (numSet.has(val + add)) {
            add++;
        }
        res = Math.max(res, add);
    });

    return res;
};
