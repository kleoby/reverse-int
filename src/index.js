module.exports = function reverse(n) {

    let myArray = Array.from(String(n), Number);

    if (Math.sign(n) === -1) {
        myArray.shift(0, 1);
        const reversed = myArray.reverse();
        let result = Number(reversed.join(''));

        return result;
    } else {
        const reversed = myArray.reverse();
        let result = Number(reversed.join(''));
        return result;
    }
}
