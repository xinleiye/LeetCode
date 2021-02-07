/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var largestMerge = function(word1, word2) {
    let res = "";
    let index1 = 0;
    let index2 = 0;
    const length1 = word1.length;
    const length2 = word2.length;

    while (index1 < length1 && index2 < length2) {
        if (word1[index1] > word2[index2]) {
            res += word1[index1];
            index1++;
        } else if (word1[index1] < word2[index2]) {
            res += word2[index2];
            index2++;
        } else {
            let subStr1 = word1.substr(index1);
            let subStr2 = word2.substr(index2);

            if (subStr1 > subStr2) {
                res += word1[index1];
                index1++;
            } else if (subStr1 < subStr2) {
                res += word2[index2];
                index2++;
            } else {
                res += word1[index1];
                index1++;
            }
        }
    }
    
    while (index1 < length1) {
        res += word1[index1];
        index1++;
    }

    while (index2 < length2) {
        res += word2[index2];
        index2++;
    }

    return res;
};
