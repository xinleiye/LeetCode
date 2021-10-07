/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    const res = [];
    const total = original.length;
    let index = 0;

    if (total !== m * n) {
        return [];
    }
    while (index < total) {
        let col = 0;
        const row = [];

        while (col < n) {
            row.push(original[index]);
            col++;
            index++;
        }
        res.push(row); 
    }

    return res;
};
