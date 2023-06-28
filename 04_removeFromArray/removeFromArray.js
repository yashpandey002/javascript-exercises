const removeFromArray = function (array, ...removingElementsArr) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        currentItem = array[i];
        if (!removingElementsArr.includes(currentItem)) {
            newArray.push(array[i]);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
