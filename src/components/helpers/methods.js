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