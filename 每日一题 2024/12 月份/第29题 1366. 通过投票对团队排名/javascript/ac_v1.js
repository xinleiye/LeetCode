/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
    const teamCount = votes[0].length;
    const teamVotes = new Array(teamCount).fill(0).map(_ => new Array(teamCount).fill(0));
    const teams = [];
    const teamIndex = new Map();

    for (let i = 0; i < teamCount; i++) {
        teams.push(votes[0][i]);
        teamIndex.set(votes[0][i], i);
    }
    for (const v of votes) {
        for (let i = 0; i < teamCount; i++) {
            const index = teamIndex.get(v[i]);

            teamVotes[index][i]++;
        }
    }
    teams.sort((t1, t2) => {
        const v1 = teamVotes[teamIndex.get(t1)];
        const v2 = teamVotes[teamIndex.get(t2)];

        for (let i = 0; i < teamCount; i++) {
            if (v1[i] !== v2[i]) {
                return v2[i] - v1[i];
            }
        }

        return t1 < t2 ? -1 : 1;
    });

    return teams.join("");
};
