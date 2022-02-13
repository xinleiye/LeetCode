/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const total = nums.length;

    if (total === 1) {
        return 0;
    }

    const oddMap = new Map();
    const evenMap = new Map();
    const add2Map = (map, num) => {
        map.set(num, (map.get(num) || 0) + 1);
    };
    const sortedByNumCount = (map) => {
        const arr = [];
        
        map.forEach((count, num) => {
            arr.push({ num, count });
        });
        arr.sort((item1, item2) => item2.count - item1.count);
        
        return arr;
    };

    nums.forEach((num, index) => {
        if (index % 2) {
            add2Map(oddMap, num);
        } else {
            add2Map(evenMap, num);
        }
    });

    const oddArr = sortedByNumCount(oddMap);
    const evenArr = sortedByNumCount(evenMap);

    if (oddArr[0].num !== evenArr[0].num) {
        return total - (oddArr[0].count + evenArr[0].count);
    } else {
        const maxCount1 = Math.max(oddArr[0].count, evenArr[0].count);
        const maxCount2 = Math.max(oddArr.length > 1 ? oddArr[1].count : 0, evenArr.length > 1 ? evenArr[1].count : 0);

        return total - (maxCount1 + maxCount2);
    }
};
