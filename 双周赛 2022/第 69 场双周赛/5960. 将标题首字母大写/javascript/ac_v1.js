/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    const res = [];
    const words = title.split(" ");

    words.forEach(word => {
        const lower = word.toLowerCase();

        if (word.length <= 2) {
            res.push(lower);
        } else {
            res.push(lower.substring(0, 1).toUpperCase() + lower.substring(1));
        }
    });
    
    return res.join(" ");
};
