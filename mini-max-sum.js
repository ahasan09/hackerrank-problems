function miniMaxSum(arr) {
    const n = arr.length;
    const result = [];

    for (let i = 0; i < n; i++) {
        let arSum = 0;
        for (let j = 0; j < n; j++) {
            if (i !== j) arSum += arr[j];
        }
        result[i] = arSum;
    }

    return Math.min(...result) + ' ' + Math.max(...result);
}

module.exports = miniMaxSum;
