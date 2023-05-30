function numUniqueEmails(emails) {
    // Create a new Set to store unique email addresses.
    const emailSet = new Set();

    // Iterate over each email in the input array.
    for (let email of emails) {
        // Split the email into the local part and the domain part.
        let [local, domain] = email.split('@');

        // Remove dots and everything after a plus symbol in the local part.
        local = local.replace(/(\.)|(\+.*)/g, '');

        // Combine the modified local part with the domain part and add it to the emailSet.
        emailSet.add(local + '@' + domain);
    }

    // Return the size of the emailSet, which represents the number of unique emails.
    return emailSet.size;
}
