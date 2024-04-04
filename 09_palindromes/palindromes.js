const palindromes = function (str) {
    const withoutSpecChar = str.toLowerCase().replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '');
    //const withoutNums = withoutSpecChar.replace(/[0-9]/g, '');
    const array = withoutSpecChar.split('');
    let reversed = [];
    for (let i = array.length; i >= 0; i--) {
        reversed.push(array[i]);
    }
    const palin = reversed.join('');
    const original = array.join('');
    if (palin === original) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
