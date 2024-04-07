const getTheTitles = function(array) {
    let newArray = [];
    array.forEach((item) => {
        newArray.push(item.title)
    })
    return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;
