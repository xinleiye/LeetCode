/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function(word) {
    const total = word.length;
    const stack = [];

    if (word[0] === "b") {
        stack.push("a");
    } else if (word[0] === "c") {
        stack.push("a", "b");
    }
    stack.push(word[0]);

    for (let i = 1; i < total; i++) {
        const last = stack[stack.length - 1];
        const cur = word[i];

        if (last === "a") {
            if (cur === "a") {
                stack.push("b", "c");
            } else if (cur === "c") {
                stack.push("b");
            }
        } else if (last === "b") {
            if (cur === "a") {
                stack.push("c");
            } else if (cur === "b") {
                stack.push("c", "a");
            }
        } else {
            if (cur === "b") {
                stack.push("a");
            } else if (cur === "c") {
                stack.push("a", "b");
            }
        }
        stack.push(cur);
    }
    if (stack[stack.length - 1] === "a") {
        stack.push("b", "c");
    } else if (stack[stack.length - 1] === "b") {
        stack.push("c");
    }

    return stack.length - total;
};
