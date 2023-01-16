/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var isItPossible = function(word1, word2) {
    const chArr1 = generateCh(word1);
    const chArr2 = generateCh(word2);

    for (let i = 0; i < 26; i++) {
        if (!chArr1[i]) {
            continue;
        }
        for (let j = 0; j < 26; j++) {
            if (!chArr2[j]) {
                continue;
            }
            chArr1[i]--;
            chArr1[j]++;
            chArr2[i]++;
            chArr2[j]--;

            if (checkCh(chArr1, chArr2)) {
                return true;
            }
            chArr1[i]++;
            chArr1[j]--;
            chArr2[i]--;
            chArr2[j]++;
        }
    }

    return false;
};

function generateCh (str) {
    const chArr = new Array(26).fill(0);

    for (const ch of str) {
        chArr[ch.charCodeAt() - 97]++;
    }

    return chArr;
}

function checkCh (chArr1, chArr2) {
    let chCount1 = 0;
    let chCount2 = 0;

    for (let i = 0; i < 26; i++) {
        if (chArr1[i]) {
            chCount1++;
        }
        if (chArr2[i]) {
            chCount2++;
        }
    }

    return chCount1 === chCount2;
}
