/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function(req_skills, people) {
    const skillLen = req_skills.length;
    const skillMap = new Map();
    for (let i = 0; i < skillLen; i++) {
        skillMap.set(req_skills[i], 1 << i);
    }

    const peopleLen = people.length;
    const mask = 1 << skillLen;
    const dp = new Array(mask).fill(peopleLen);
    const skills = new Array(mask);
    const peoples = new Array(mask);
    dp[0] = 0;
    for (let i = 0; i < peopleLen; i++) {
        let skillMask = 0;

        for (const s of people[i]) {
            skillMask |= skillMap.get(s);
        }
        for (let j = 0; j < mask; j++) {
            const curSkill = j | skillMask;

            if (dp[curSkill] > dp[j] + 1) {
                dp[curSkill] = dp[j] + 1;
                skills[curSkill] = j;
                peoples[curSkill] = i;
            }
        }
    }

    const res = [];
    let curSkill = mask - 1;
    while (curSkill) {
        res.push(peoples[curSkill]);
        curSkill = skills[curSkill];
    }

    return res;
};
