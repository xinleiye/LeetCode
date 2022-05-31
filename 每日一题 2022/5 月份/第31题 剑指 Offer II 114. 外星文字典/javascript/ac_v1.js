/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    const edges = new Map();
    for (const word of words) {
        for (const ch of word) {
            if (!edges.has(ch)) {
                edges.set(ch, []);
            }
        }
    }

    let valid = true;
    const total = words.length;
    const addEdge = (before, after) => {
        const len1 = before.length;
        const len2 = after.length;
        const len = Math.min(len1, len2);
        let index = 0;

        while (index < len) {
            const ch1 = before[index];
            const ch2 = after[index];

            if (ch1 !== ch2) {
                edges.get(ch1).push(ch2);
                break;
            }
            index++;
        }
        if (index === len && len1 > len2) {
            valid = false;
        }
    }
    for (let i = 1; i < total; i++) {
        addEdge(words[i - 1], words[i]);
    }

    const VISITING = 1;
    const VISITED = 2;
    const states = new Map();
    const order = new Array(edges.size).fill(0);
    let index = edges.size - 1;
    const dfsSearch = (node) => {
        const nexts = edges.get(node);

        states.set(node, VISITING);
        for (const next of nexts) {
            if (!states.has(next)) {
                dfsSearch(next);
                if (!valid) {
                    return;
                }
            } else if (states.get(next) === VISITING) {
                valid = false;
                return;
            }
        }
        states.set(node, VISITED);
        order[index] = node;
        index--;
    }

    const chSet = edges.keys();
    for (const ch of chSet) {
        if (!states.has(ch)) {
            dfsSearch(ch);
        }
    }
    if (!valid) {
        return "";
    }

    return order.join("");
};
