// Convert Time from 12 hour format to 24 hour format
function timeConversion(t) {
    const PM = t.match('PM') ? true : false;
    const parts = t.split(':');
    let hour = parseInt(parts[0], 10);
    let h;
    let s;

    if (PM) {
        h = hour === 12 ? hour : 12 + hour;
        s = parts[2].replace('PM', '');
    } else {
        h = hour === 12 ? '00' : hour;
        s = parts[2].replace('AM', '');
    }

    h = '' + h;
    while (h.length < 2) {
        h = '0' + h;
    }

    return `${h}:${parts[1]}:${s}`;
}

module.exports = timeConversion;
