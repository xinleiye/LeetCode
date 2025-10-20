/**
 * @param {number[]} skill
 * @param {number[]} mana
 * @return {number}
 */
var minTime = function(skill, mana) {
    const mTotal = mana.length;
    const sTotal = skill.length;
    const finishTime = new Array(sTotal + 1);

    // 第一瓶药水的完成时间点是固定的
    finishTime[0] = 0;
    for (let i = 1; i <= sTotal; i++) {
        finishTime[i] = finishTime[i - 1] + mana[0] * skill[i - 1];
    }
    for (let i = 1; i < mTotal; i++) {
        let start = finishTime[1];
        let time = mana[i] * skill[0];

        for (let j = 2; j <= sTotal; j++) {
            start = Math.max(start, finishTime[j] - time);
            time += mana[i] * skill[j - 1];
        }
        finishTime[0] = start;
        for (let j = 1; j <= sTotal; j++) {
            finishTime[j] = finishTime[j - 1] + mana[i] * skill[j - 1];
        }
    }

    return finishTime[sTotal];
};
