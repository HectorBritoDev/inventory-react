export const groupBy = (array, key) => { //Key is the criteria to group
    return array.reduce(function (storage, value) {
        // get the first instance of the key by which we're grouping
        let group = value[key];

        //creates the index for the new group if doesn't have one creates a new index
        storage[group] = storage[group] || [];

        //add this item to the corresponding group
        storage[group].push(value);
        // return the updated storage to the reduce function, which will then loop through the next 
        return storage;
    }, {});
}

export const orderBy = (key, nestedObject = null, order = 'asc') => function innerSort(a, b) {
    if (nestedObject != null && (!a[nestedObject].hasOwnProperty(key) || !b[nestedObject].hasOwnProperty(key))) {
        return 0;
    } else if (nestedObject == null && (!a.hasOwnProperty(key) || !b.hasOwnProperty(key))) {
        return 0;
    }

    const variableA = nestedObject ? a[nestedObject][key] : a[key];
    const variableB = nestedObject ? b[nestedObject][key] : b[key];
    let comparision = 0;

    if (variableA > variableB) {
        comparision = 1;
    } else if (variableA < variableB) {
        comparision = -1;
    }

    return (order === 'desc') ? (comparision * -1) : comparision;

}