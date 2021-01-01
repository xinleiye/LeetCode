/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let nameCharCount;
    let typedCharCount;
    let getCharCount = (str) => {
        let index = 1;
        let count = 1;
        let charArr = [];

        while (index < str.length) {
            if (str[index] === str[index - 1]) {
                count++;
            } else {
                charArr.push({
                    ch: str[index - 1],
                    count: count
                });
                count = 1;
            }
            index++;
        }
        charArr.push({
            ch: str[index - 1],
            count: count
        });

        return charArr;
    };

    nameCharCount = getCharCount(name);
    typedCharCount = getCharCount(typed);

    if (nameCharCount.length !== typedCharCount.length) {
        return false;
    } else {
        for (let i = 0; i < nameCharCount.length; i++) {
            if (nameCharCount[i].ch !== typedCharCount[i].ch ||
                nameCharCount[i].count > typedCharCount[i].count) {
                return false;
            }
        }
    }

    return true;
};
