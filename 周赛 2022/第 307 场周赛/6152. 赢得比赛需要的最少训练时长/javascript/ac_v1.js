/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
    let needEnergy = 0;
    let curExp = initialExperience;
    let needExp = 0;
    const total = energy.length;

    for (let i = 0; i < total; i++) {
        needEnergy += energy[i];
        if (curExp <= experience[i]) {
            needExp += experience[i] - curExp + 1;
            curExp += experience[i] - curExp + 1;
        }
        curExp += experience[i];
    }

    return needExp + (needEnergy < initialEnergy ? 0 : needEnergy - initialEnergy + 1);
};
