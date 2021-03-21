/**
 * @param {string} s
 * @return {number}
 */
 var secondHighest = function(s) {
    const arr = [];
    const length = s.length;
    const flag = new Array(10).fill(0);
    
    for (let i = 0; i < length; i++) {
        if (!isNaN(s[i])) {
            let num = parseInt(s[i], 10);

            if (flag[num] === 0) {
                arr.push(parseInt(s[i], 10));
                flag[num]++;
            }
        }
    }
    arr.sort((val1, val2) => {
        return val2 - val1;
    });

    return arr.length <= 1 ? -1 : arr[1];
};
