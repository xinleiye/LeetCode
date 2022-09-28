/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const total = names.length;
    const indexArr = new Array(total);
    const res = new Array(total);
    
    for (let i = 0; i < total; i++) {
        indexArr[i] = i;
    }
    indexArr.sort((i1, i2) => {
        return heights[i2] - heights[i1];
    });
    for (let i = 0; i < total; i++) {
        res[i] = names[indexArr[i]];
    }
    
    return res;
};
