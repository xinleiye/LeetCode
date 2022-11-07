/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    const res = [];
    const total = command.length;
    let index = 0;

    while (index < total) {
        if (command[index] === "G") {
            res.push("G");
        } else if (command[index] === ")") {
            if (command[index - 1] === "(") {
                res.push("o");
            } else {
                res.push("al");
            }
        }
        index++;
    }

    return res.join("");
};
