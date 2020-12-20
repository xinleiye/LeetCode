/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
    let res = [];
    let nums = [];
    let get3Group = (len) => {
        let index = 0;

        while (index < len) {
            let group = "";

            for (let i = 0; i < 3; i++) {
                group += nums[index * 3 + i];
            }
            index++;
            res.push(group);
        }
    };

    for (let i = 0; i < number.length; i++) {
        if (number[i] !== " " && !isNaN(number[i])) {
            nums.push(number[i]);
        }
    }

    if (nums.length % 3 === 1) {
        get3Group((nums.length - 4) / 3);
        for (let i = nums.length - 4; i < nums.length; i += 2) {
            res.push(nums[i] + nums[i + 1]);
        }
    } else if (nums.length % 3 === 2) {
        get3Group((nums.length - 2) / 3);
        for (let i = nums.length - 2; i < nums.length; i += 2) {
            res.push(nums[i] + nums[i + 1]);
        }
    } else {
        get3Group(nums.length / 3);
    }

    return res.join("-");
};
