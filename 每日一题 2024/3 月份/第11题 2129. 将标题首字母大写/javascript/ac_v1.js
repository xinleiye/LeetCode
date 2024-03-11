/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    const words = title.split(" ").map(item => item.toLowerCase());
    const length = words.length;

    for (let i = 0; i < length; i++) {
        const w = words[i];

        if (w.length > 2) {
            words[i] = w[0].toUpperCase() + w.substring(1);
        }
    }

    return words.join(" ");
};
