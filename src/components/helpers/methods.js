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

export const orderBy = (key, nestedObject = null, order, aditionalFunction = null) => function innerSort(a, b) {
    //check if the key exist in the object
    if (nestedObject != null && (typeof (a[nestedObject]) === 'undefined' || !a[nestedObject].hasOwnProperty(key) || !b[nestedObject].hasOwnProperty(key))) {
        return 0;
    } else if (nestedObject == null && (!a.hasOwnProperty(key) || !b.hasOwnProperty(key))) {
        return 0;
    }

    //key is inside a nestedObject? 
    var variableA = nestedObject ? a[nestedObject][key] : a[key];
    var variableB = nestedObject ? b[nestedObject][key] : b[key];

    //apply aditional functions if exists
    if (aditionalFunction) {
        variableA = aditionalFunction(variableA);
        variableB = aditionalFunction(variableB);
    }

    let comparision = 0;

    if (variableA > variableB) {
        comparision = 1;
    } else if (variableA < variableB) {
        comparision = -1;
    }

    //If the order is desc multiplu * -1 to inver the order;
    return (order === 'desc') ? (comparision * -1) : comparision;

}

export const mathSimpleOperation = (operation, key, nestedObject = null, ) => function innerReduction(accumulator, item) {

    if (nestedObject) {
        item = item[nestedObject];
    }
    switch (operation) {
        case 'add':
            return accumulator += item[key];
        case 'sub':
            return accumulator -= item[key];
        case 'mult':
            return accumulator * item[key];
        default:
            return 'No operation match';
    }

}

export const numberFormat = num => {
    return num
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}
export const currencyFormat = num => {
    return num
        .toFixed(2) //Always 2 decimals,
        .replace('.', ',')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

export const closeModal = (modalId) => {
    const modal = document.querySelector(String(modalId));
    modal.classList.remove('show');
    console.log('closed');
}
export const showModal = (modalId, formId) => {
    const modal = document.querySelector(String(modalId));
    modal.classList.add('show');
    document.querySelector(String(formId))[0].focus()
    console.log('opened');
}