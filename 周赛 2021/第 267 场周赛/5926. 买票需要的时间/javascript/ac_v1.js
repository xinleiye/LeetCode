/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let res = 0;
    let index = k;

    while (true) {
        let first = tickets.shift();

        first--;
        res++;
        if (first === 0) {
            if (index === 0) {
                break;
            }
        } else if (first > 0) {
            tickets.push(first);
        }
        index--;
        if (index < 0) {
            index = tickets.length - 1;
        }
    }

    return res;
};
