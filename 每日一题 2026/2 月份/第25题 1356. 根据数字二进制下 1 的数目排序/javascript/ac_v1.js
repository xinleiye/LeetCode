/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    arr.sort((n1, n2) => {
        const c1 = bitCount(n1);
        const c2 = bitCount(n2);

        return c1 !== c2 ? c1 - c2 : n1 - n2;
    });

    return arr;
};

function bitCount(num) {
    let count = 0;

    while (num) {
        if (num & 1) {
            count++;
        }
        num = num >>> 1;
    }

    return count;
}
