/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    const suitSet = new Set();
    for (const s of suits) {
        suitSet.add(s);
    }
    if (suitSet.size === 1) {
        return "Flush";
    }

    const ranksMap = new Map();
    let maxRankCount = 0;
    for (const r of ranks) {
        if (ranksMap.has(r)) {
            ranksMap.set(r, ranksMap.get(r) + 1);
        } else {
            ranksMap.set(r, 1);
        }
        maxRankCount = Math.max(maxRankCount, ranksMap.get(r));
    }
    if (maxRankCount === 1) {
        return "High Card";
    }
    if (maxRankCount >= 3 ) {
        return "Three of a Kind";
    }

    return "Pair";
};
