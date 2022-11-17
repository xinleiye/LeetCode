/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    const sLength = s.length;
    const charPos = new Array(26).fill(0).map(() => []);
    for (let i = 0; i < sLength; i++) {
        charPos[s.charCodeAt(i) - 97].push(i);
    }

    let res = words.length;
    for (const word of words) {
        if (word.length > sLength) {
            res--;
            continue;
        }

        let index = -1;
        for (const ch of word) {
            const pos = charPos[ch.charCodeAt() - 97];

            if (pos.length === 0 || pos[pos.length - 1] <= index) {
                res--;
                break;
            }
            index = binarySearch(pos, index);
        }
    }

    return res;
};

function binarySearch (arr, tar) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const mid = (left + right) >>> 1;

        if (arr[mid] > tar) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return arr[left];
}
