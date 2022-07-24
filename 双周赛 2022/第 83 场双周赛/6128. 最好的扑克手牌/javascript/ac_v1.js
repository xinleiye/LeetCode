/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    const length = 5;
    const suitSet = new Set();
    const rankMap = new Map();
    let maxRankCount = 0;

    for (let i = 0; i < length; i++) {
        if (!suitSet.has(suits[i])) {
            suitSet.add(suits[i]);
        }
        if (rankMap.has(ranks[i])) {
            rankMap.set(ranks[i], rankMap.get(ranks[i]) + 1);
        } else {
            rankMap.set(ranks[i], 1);
        }
        maxRankCount = Math.max(maxRankCount, rankMap.get(ranks[i]));
    }
    if (suitSet.size === 1) {
        return "Flush";
    }
    if (maxRankCount === 1) {
        return "High Card";
    }
    if (maxRankCount >= 3) {
        return "Three of a Kind";
    }

    return "Pair"
};
