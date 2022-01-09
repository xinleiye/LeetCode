/**
 * @param {string[]} startWords
 * @param {string[]} targetWords
 * @return {number}
 */
var wordCount = function(startWords, targetWords) {
    let res = 0;
    const targetWordFlagMap = new Map();
    const getStrFlag = (str) => {
        let res = 0;
        const length = str.length;

        for (let i = 0; i < length; i++) {
            res |= 1 << (str.charCodeAt(i) - 97);
        }

        return res;
    };

    targetWords.forEach(word => {
        const flag = getStrFlag(word);

        if (targetWordFlagMap.has(flag)) {
            targetWordFlagMap.set(flag, targetWordFlagMap.get(flag) + 1);
        } else {
            targetWordFlagMap.set(flag, 1);
        }
    });

    startWords.forEach(word => {
        const flag = getStrFlag(word);
        
        for (let i = 0; i < 26; i++) {
            const mask = 1 << i;

            if (!(flag & mask)) {
                const newFlag = flag | mask;

                if (targetWordFlagMap.has(newFlag)) {
                    res += targetWordFlagMap.get(newFlag);
                    targetWordFlagMap.delete(newFlag);
                }
            }
        }
    });

    return res;
};
