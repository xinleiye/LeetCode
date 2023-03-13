/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
    let curEnergy = initialEnergy;
    let curExp = initialExperience;
    let maxDiffExp = 0;
    const total = energy.length;

    for (let i = 0; i < total; i++) {
        curEnergy -= energy[i];
        maxDiffExp = Math.max(maxDiffExp, curExp <= experience[i] ? experience[i] - curExp + 1 : 0);
        curExp += experience[i];
    }

    return maxDiffExp + (curEnergy > 0 ? 0 : 1 - curEnergy);
};
