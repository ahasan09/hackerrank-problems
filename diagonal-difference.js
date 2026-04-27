function diagonalDifference(arr) {
    let j = 0;
    let s1 = 0;
    let s2 = 0;
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        s1 += arr[i][j];
        s2 += arr[i][n - j - 1];
        j++;
    }
    return Math.abs(s1 - s2);
}

module.exports = diagonalDifference;
