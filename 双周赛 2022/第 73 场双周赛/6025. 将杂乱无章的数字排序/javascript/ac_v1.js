/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
    const mappingNum = (num, mapping) => {
        let mapNum = 0;
        let base = 1;

        do {
            mapNum = mapping[num % 10] * base + mapNum;
            num = Math.floor(num / 10);
            base *= 10;
        } while (num)

        return mapNum;
    };

    nums.sort((n1, n2) => mappingNum(n1, mapping) - mappingNum(n2, mapping));
    
    return nums;
};
