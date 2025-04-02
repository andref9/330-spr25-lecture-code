
// Implementation 1
// function findItemByKeyValue(items, key, value) {
//     // return the object in items (array of objects)
//     // with the specified value for the supplied key
//     let foundItem;
//     items.forEach(item => {
//         if (item[key] === value) {
//             foundItem = item;
//         }
//     });
//     return foundItem;
// }


function findItemByKeyValue(items, key, value) {
    // return the object in items (array of objects)
    // with the specified value for the supplied key
    return items.find(item => item[key] === value);
}

// console.log(findItemByKeyValue(
//     [{name: 'Champ'}],
//     'name',
//     'Champ'
// ));

// console.log(findItemByKeyValue(
//     [],
//     'name',
//     'Champ'
// ));

// console.log(findItemByKeyValue(
//     [{a: 'b'}],
//     'name',
//     'Champ'
// ));

// console.log(findItemByKeyValue(
//     [{name: 'b'}],
//     'name',
//     'Champ'
// ));

// console.log(findItemByKeyValue(
//     [{name: 'champ'}],
//     'name',
//     'Champ'
// ));

// console.log(findItemByKeyValue(
//     [{name: 'Chris'}, {name: 'Champ'}],
//     'name',
//     'Champ'
// ));

// console.log(findItemByKeyValue(
//     [{name: 'Champ', meta: {animal: 'dog'}}, {name: 'Champ', meta: {animal: 'cat'}}],
//     'name',
//     'Champ'
// ));

// Implementation 1
// function removeItemByKeyValue(items, key, value) {
//     // remove the object in items with the specified
//     // value for the supplied key
//     // items is still an array of objects

//     // return that object
//     let itemToRemoveIdx;
//     for (let i = 0; i < items.length; i++) {
//         if (items[i][key] === value) {
//             itemToRemoveIdx = i;
//             break;
//         }
//     }
//     const itemToRemove = items[itemToRemoveIdx];

//     items.splice(itemToRemoveIdx, 1);

//     console.log('initial array', items);

//     return itemToRemove;
// }

function removeItemByKeyValue(items, key, value) {
    // remove the object in items with the specified
    // value for the supplied key
    // items is still an array of objects

    // return that object
    const itemToRemoveIdx = items.findIndex(item => item[key] === value);
    if (itemToRemoveIdx >= 0) {
        const slicedElements = items.splice(itemToRemoveIdx, 1);
        return slicedElements[0];
    }
}

// console.log(removeItemByKeyValue(
//     [{name: 'Champ'}],
//     'name',
//     'Champ'
// ));

// console.log(removeItemByKeyValue(
//     [],
//     'name',
//     'Champ'
// ));

// console.log(removeItemByKeyValue(
//     [{a: 'b'}],
//     'name',
//     'Champ'
// ));

console.log(removeItemByKeyValue(
    [{name: 'Champ', meta: {animal: 'dog'}}, {name: 'Champ', meta: {animal: 'cat'}}],
    'name',
    'Champ'
));