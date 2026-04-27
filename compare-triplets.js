function compareTriplets(a, b) {
    let aliceCount = 0;
    let bobCount = 0;
    const length = a.length;

    for (let i = 0; i < length; i++) {
        if (a[i] > b[i]) {
            aliceCount++;
        } else if (a[i] < b[i]) {
            bobCount++;
        }
    }

    return [aliceCount, bobCount];
}

module.exports = compareTriplets;
