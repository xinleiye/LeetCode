/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    let res = 0;
    const length = s.length;
    const charCount = new Array(length);
    const calcBeautyVal = (start, end) => {
        const currentCount = new Array(26).fill(0);
        const endCount = charCount[end];
        let max = 0;
        let min = 500;

        for (let i = 0; i < 26; i++) {
            currentCount[i] = endCount[i] - (start === 0 ? 0 : charCount[start - 1][i]);
        }
        for (let i = 0; i < 26; i++) {
            if (currentCount[i] > 0) {
                if (currentCount[i] > max) {
                    max = currentCount[i];
                }
                if (currentCount[i] < min) {
                    min = currentCount[i];
                }
            }
        }      
        return max - min;
    };

    for (let i = 0; i < length; i++) {
        charCount[i] = new Array(26).fill(0);
    }

    charCount[0][s.charCodeAt(0) - 97]++;
    for (let i = 1; i < length; i++) {
        const pre = charCount[i - 1];
        
        for (let j = 0; j < 26; j++) {
            charCount[i][j] = pre[j];
        }
        charCount[i][s.charCodeAt(i) - 97]++;
    }

    for (let i = 1; i < length; i++) {
        for (let j = 0; j < i; j++) {
            res += calcBeautyVal(j, i);
        }
    }
    
    return res;
};
