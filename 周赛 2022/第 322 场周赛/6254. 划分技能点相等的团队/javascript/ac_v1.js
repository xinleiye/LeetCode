/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    skill.sort((n1, n2) => n1 - n2);

    const total = skill.length;
    const sum = skill[0] + skill[total - 1];
    for (let i = 1; i < total / 2; i++) {
        if (skill[i] + skill[total - 1 - i] !== sum) {
            return -1;
        }
    }

    let res = 0;
    for (let i = 0; i < total / 2; i++) {
        res += skill[i] * skill[total - 1 - i];
    }

    return res;
};
