/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function(messages, senders) {
    const words = new Map();
    const total = messages.length;
    for (let i = 0; i < total; i++) {
        const messageLen = messages[i].split(" ").length;
        const sender = senders[i];
        if (words.has(sender)) {
            words.set(sender, words.get(sender) + messageLen);
        } else {
            words.set(sender, messageLen);
        }
    }

    let res = "";
    let maxLen = 0;
    words.forEach((l, s) => {
        if (l > maxLen) {
            res = s;
            maxLen = l;
        } else if (l === maxLen) {
            if (s > res) {
                res = s;
            }
        }
    });
    
    return res;
};
