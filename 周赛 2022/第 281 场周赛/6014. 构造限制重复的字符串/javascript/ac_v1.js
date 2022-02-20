/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function(s, repeatLimit) {
    const res = [];
    const maxQueue = new MaxPriorityQueue({
        priority: (ele) => ele.charCode
    });
    const genCharQueue = (queue, str) => {
        const charArr = new Array(26).fill(0);

        for (const ch of str) {
            charArr[ch.charCodeAt(0) - 97]++;
        }
        charArr.forEach((count, index) => {
            if (count > 0) {
                queue.enqueue({
                    char: String.fromCharCode(index + 97),
                    charCode: index + 97,
                    count: count
                });
            }
        });
    }
    let preChar = "";

    genCharQueue(maxQueue, s);
    while (maxQueue.size() > 0) {
        let matched = maxQueue.dequeue().element;
        let repeat = Math.min(repeatLimit, matched.count);
        
        if (matched.char === preChar) {
            if (maxQueue.size() > 0) {
                const tmp = matched;
                matched = maxQueue.dequeue().element;
                maxQueue.enqueue(tmp);
                repeat = 1;
            } else {
                break;
            }
        }
        res.push(matched.char.repeat(repeat));
        matched.count -= repeat;
        if (matched.count) {
            maxQueue.enqueue(matched);
        }
        preChar = matched.char;
    }
    
    return res.join("");
};
