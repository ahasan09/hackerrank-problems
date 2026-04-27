function birthdayCakeCandles(ar) {
    const maxHeight = Math.max(...ar);
    return ar.filter(c => c === maxHeight).length;
}

module.exports = birthdayCakeCandles;
