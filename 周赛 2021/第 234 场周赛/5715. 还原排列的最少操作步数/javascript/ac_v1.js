/**
 * @param {number} n
 * @return {number}
 */
 var reinitializePermutation = function(n) {
    const switchIndex = new Array(n);
    let numsArray = new Array(n);
    
    for (let i = 0; i < n; i++) {
        switchIndex[i] = i % 2 === 0 ? i / 2 : (n / 2) + (i - 1) / 2;
        numsArray[i] = i;
    }

    for (let i = 0; i < n; i++) {
        let equal = true;
        let tmpArray = new Array(n);

        for (let j = 0; j < n; j++) {
            tmpArray[j] = numsArray[switchIndex[j]];
        }
        for (let j = 0; j < n; j++) {
            if (tmpArray[j] !== j) {
                equal = false;
                numsArray = tmpArray;
                break;
            }
        }
        if (equal) {
            return i + 1;
        }
    }
};
