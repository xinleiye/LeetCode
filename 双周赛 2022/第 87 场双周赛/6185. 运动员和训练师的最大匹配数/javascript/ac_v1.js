/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
    let res = 0;
    let tIndex = 0;
    const tTotal = trainers.length;

    players.sort((n1, n2) => n1 - n2);
    trainers.sort((n1, n2) => n1 - n2);
    for (const p of players) {
        while (tIndex < tTotal) {
            if (trainers[tIndex] >= p) {
                res++;
                tIndex++;
                break;
            }
            tIndex++;
        }
        if (tIndex >= tTotal) {
            break;
        }
    }

    return res;
};
