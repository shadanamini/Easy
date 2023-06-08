const reverseList = function (head) {
    let [previous, current, next] = [null, head, null];

    while (current) {
        next = current.next;
        current.next = previous;

        previous = current;
        current = next;
    }

    return previous;
};