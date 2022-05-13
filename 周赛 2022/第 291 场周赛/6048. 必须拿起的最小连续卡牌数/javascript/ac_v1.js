/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    let res = cards.length + 1;
    const total = cards.length;
    const numMap = new Map();

    for (let i = 0; i < total; i++) {
        if (numMap.has(cards[i])) {
            numMap.get(cards[i]).push(i);
        } else {
            numMap.set(cards[i], [i]);
        }
    }
    numMap.forEach(index => {
        if (index.length > 1) {
            for (let i = 1; i < index.length; i++) {
                res = Math.min(res, index[i] - index[i - 1] + 1);
            }
        }
    });

    return res === total + 1 ? -1 : res;
};
