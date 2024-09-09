/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    const maxConsecutiveChar = (str, ch, count) => {
        const length = str.length;
        let max = 0;
        let left = 0;
        let right = 0;
        let sum = 0;

        while (right < length) {
            if (str.charAt(right) !== ch) {
                sum++;
            }
            while (sum > count) {
                if (str.charAt(left) !== ch) {
                    sum--;
                }
                left++;
            }
            max = Math.max(max, (right - left) + 1);
            right++;
        }

        return max;
    };

    return Math.max(maxConsecutiveChar(answerKey, "T", k), maxConsecutiveChar(answerKey, "F", k));
};
