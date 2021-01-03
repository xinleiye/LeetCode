/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function(target) {
    let oneGroups = 0;
    let changed = false;

    for(let i = 0; i < target.length; i++) {
        if (target[i] === "1") {
            if (changed === false) {
                oneGroups++;
                changed = true;
            }
        } else {
            changed = false;
        }
    }

    if (oneGroups === 0) {
        return 0;
    } else {
        if (target[target.length - 1] === "1") {
            return (oneGroups - 1) * 2 + 1;
        } else {
            return oneGroups * 2;
        }
    }
};
