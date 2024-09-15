/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const queue = [];

    for (const ch of s) {
        if (ch !== "*") {
            queue.push(ch);
        } else {
            queue.pop();
        }
    }

    return queue.join("");
};
