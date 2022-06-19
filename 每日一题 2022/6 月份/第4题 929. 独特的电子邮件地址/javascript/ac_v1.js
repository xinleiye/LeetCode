/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const emailAddress = emails.map(item => {
        return item.split("@");
    }).map(([local, domain]) => {
        return [local.split("+")[0], domain];
    }).map(([local, domain]) => {
        return [local.split(".").join(""), domain];
    }).map(item => item.join("@"));

    const emailSet = new Set();
    for (const e of emailAddress) {
        if (!emailSet.has(e)) {
            emailSet.add(e);
        }
    }

    return emailSet.size;
};
