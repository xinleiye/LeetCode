/**
 * @param {string} s
 * @return {boolean}
 */
var checkPartitioning = function(s) {
    const length = s.length;
    const charNum = new Array(length);
    const checkPartition = (start, end) => {
        let odd = 0;

        for (let i = 0; i < 26; i++) {
            if ((charNum[end][i] - (start > 0 ? charNum[start - 1][i] : 0)) % 2) {
                odd++;
            }
        }

        return odd <= 1;
    };
    const isPartition = (start, end) => {
        while (start < end) {
            if (s[start] !== s[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    };
    const partitionEnd  = new Array(length).fill(false);

    charNum[0] = new Array(26).fill(0);
    charNum[0][s.charCodeAt(0) - 97] = 1;
    for (let i = 1; i < length; i++) {
        charNum[i] = new Array(...charNum[i - 1]);
        charNum[i][s.charCodeAt(i) - 97]++;
    }

    for (let i = length - 1; i > 1; i--) {
        partitionEnd[i] = checkPartition(i, length - 1) && isPartition(i, length - 1);
    }

    for (let i = 0; i < length - 2; i++) {
        if (!checkPartition(0, i) || !isPartition(0, i)) {
            continue;
        }
        for (let j = length - 1; j > i + 1; j--) {
            if (!partitionEnd[j]) {
                continue;
            }
            if (checkPartition(i + 1, j - 1) && isPartition(i + 1, j - 1)) {
                return true;;
            }
        }
    }
    
    return false;
};
