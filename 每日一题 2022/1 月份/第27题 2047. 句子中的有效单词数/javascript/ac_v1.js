/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
    let res = 0;
    const isValidToken = (str) => {
        const length = str.length;

        if (length === 0) {
            return false;
        }
        if (str.split("-").length > 2) {
            return false;
        }

        const hyphenIndex = str.indexOf("-");
        if (hyphenIndex === 0 || hyphenIndex === length - 1) {
            return false;
        }

        for (let i = 0; i < length; i++) {
            if (str[i] >= "0" && str[i] <= "9") {
                return false;
            }
            if (str[i] < "a" || str[i] > "z") {
                if (str[i] !== "-") {
                    if (hyphenIndex > 0 && (i === hyphenIndex - 1 || i === hyphenIndex + 1)) {
                        return false;
                    }
                    if (length > 1 && i !== length - 1) {
                        return false;
                    }
                }
            }
        }

        return true;
    };

    sentence.split(" ").forEach(word => {
        if (isValidToken(word)) {
            res++;
        }
    });

    return res;
};
