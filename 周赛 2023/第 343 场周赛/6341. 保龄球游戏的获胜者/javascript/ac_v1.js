/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
    const score1 = calcScore(player1);
    const score2 = calcScore(player2);

    if (score1 > score2) {
        return 1;
    }
    if (score1 < score2) {
        return 2;
    }
    return 0;
};

function calcScore(scores) {
    let score = 0;
    const total = scores.length;

    for (let i = 0; i < total; i++) {
        if (i >= 1 && (scores[i - 1] === 10 || scores[i - 2] === 10)) {
            score += scores[i] * 2;
        } else {
            score += scores[i];
        }
    }

    return score;
}
