const numUniqueEmails = (emails) => {
    const set = new Set();

    for (let email of emails) {
        let [local, domain] = email.split('@');

        local = local.replace(/(\.)|(\+.*)/g, '');

        set.add(local + '@' + domain);
    }

    return set.size;
};