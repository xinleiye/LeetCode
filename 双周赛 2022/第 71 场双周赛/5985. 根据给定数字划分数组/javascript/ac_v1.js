/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const bigger = [];
    const smaller = [];
    const equal = [];
    
    nums.forEach(num => {
        if (num > pivot) {
            bigger.push(num);
        } else if (num < pivot) {
            smaller.push(num);
        } else {
            equal.push(num);
        }
    });
    
    return [].concat(smaller, equal, bigger);
};
