/**
 * @param {number[]} answers
 * @return {number}
 */
 var numRabbits = function(answers) {
    let res = 0;
    const numMap = new Map();

    answers.forEach(num => {
        if (numMap.has(num)) {
            numMap.set(num, numMap.get(num) + 1);
        } else {
            numMap.set(num, 1);
        }
    });

    numMap.forEach((val, key) => {
        res += Math.ceil(val / (key + 1)) * (key + 1);
    });

    return res;
};
