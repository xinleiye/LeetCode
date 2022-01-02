/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let res = 0;
    const beams = new Array(bank.length).fill(0);

    for (let i = 0, maxRow = bank.length; i < maxRow; i++) {
        let count = 0;
        const row = bank[i];

        for (let j = 0, maxCol = row.length; j < maxCol; j++) {
            if (row[j] === "1") {
                count++;
            }
        }
        beams[i] = count;
    }

    let preIndex = 0;
    let curIndex = 1;

    while(curIndex < bank.length) {
        if (beams[curIndex] !== 0) {
            res += beams[curIndex] * beams[preIndex];
            preIndex = curIndex;
        }
        curIndex++;
    }

    return res;
};
