/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    let get1Count = (num) => {
        let count = 0;

        while (num > 0) {
            if (num & 1) {
                count++;
            }
            num = num >>> 1;
        }
        return count;
    };


    arr.sort((val1, val2) => {
        let diff = get1Count(val1) - get1Count(val2);

        if (diff === 0) {
            return val1 -  val2;
        } else {
            return diff;
        }
    });

    return arr;
};
