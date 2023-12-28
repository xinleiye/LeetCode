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
    const total = scores.length;
    let score = scores[0] + (total > 1 ? (scores[0] === 10 ? scores[1] * 2 : scores[1]) : 0);

    for (let i = 2; i < total; i++) {
        if ((scores[i - 1] === 10 || scores[i - 2] === 10)) {
            score += scores[i] * 2;
        } else {
            score += scores[i];
        }
    }

    return score;
}
