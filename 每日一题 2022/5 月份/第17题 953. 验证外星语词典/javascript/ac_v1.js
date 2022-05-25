/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const chOrder = new Map();
    const total = words.length;
    const compare = (w1, w2) => {
        let index = 0;
        let max = Math.max(w1.length, w2.length);

        while (index < max) {
            const o1 = chOrder.get(w1[index] ? w1[index] : "");
            const o2 = chOrder.get(w2[index] ? w2[index] : "");

            if (o1 !== o2) {
                return o1 - o2;
            }
            index++;
        }

        return 0;
    };

    chOrder.set("", -1);
    for (let i = 0; i < order.length; i++) {
        chOrder.set(order[i], i);
    }
    for (let i = 1; i < total; i++) {
        if (compare(words[i - 1], words[i]) > 0) {
            return false;
        }
    }

    return true;
};
