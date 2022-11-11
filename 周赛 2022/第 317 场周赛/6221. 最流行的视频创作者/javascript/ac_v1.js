/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 */
var mostPopularCreator = function(creators, ids, views) {
    const total = creators.length;
    const creatorMap = new Map();
    for (let i = 0; i < total; i++) {
        if (creatorMap.has(creators[i])) {
            creatorMap.get(creators[i]).push({
                id: ids[i],
                view: views[i]
            });
        } else {
            creatorMap.set(creators[i], [{
                id: ids[i],
                view: views[i]
            }]);
        }
    }

    let res = [];
    let maxTotalView = 0;
    creatorMap.forEach((info, creator) => {
        let totalView = 0;
        let maxView = 0;
        let maxViewId = "z";

        for (const { id, view } of info) {
            totalView += view;
            if (view > maxView) {
                maxView = view;
                maxViewId = id;
            } else if (view === maxView && id < maxViewId) {
                maxViewId = id;
            }
        }
        if (totalView > maxTotalView) {
            maxTotalView = totalView;
            res = [[creator, maxViewId]];
        } else if (totalView === maxTotalView) {
            res.push([creator, maxViewId]);
        }
    });

    return res;
};
