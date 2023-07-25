/**
 * @param {number[]} nums
 * @return {number}
 */
var halveArray = function(nums) {
    let res = 0;
    let totalSum = 0;
    let diffSum = 0;
    const maxQueue = new MaxPriorityQueue();

    for (const n of nums) {
        totalSum += n;
        maxQueue.enqueue(n);
    }
    while (diffSum < totalSum / 2) {
        const halfMax = maxQueue.dequeue().element / 2;
        
        diffSum += halfMax;
        maxQueue.enqueue(halfMax);
        res++;
    }
    
    return res;
};
