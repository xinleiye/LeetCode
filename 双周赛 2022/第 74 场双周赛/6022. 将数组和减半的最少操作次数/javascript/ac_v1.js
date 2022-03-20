/**
 * @param {number[]} nums
 * @return {number}
 */
var halveArray = function(nums) {
    let res = 0;
    let totalSum = 0;
    let diffSum = 0;
    const maxQueue = new MaxPriorityQueue();

    nums.forEach(num => {
        totalSum += num;
        maxQueue.enqueue(num);
    });
    while (diffSum < totalSum / 2) {
        const halfMax = maxQueue.dequeue().element / 2;
        
        diffSum += halfMax;
        maxQueue.enqueue(halfMax);
        res++;
    }
    
    return res;
};
