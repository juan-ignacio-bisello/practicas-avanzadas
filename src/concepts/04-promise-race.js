
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = ( element ) => {

    const renderValue = (value) => {
        element.innerHTML = value;
    }

    Promise.race([
        slowPromises(),
        mediumPromises(),
        mediumPromises(),
        fastPromises(),
        mediumPromises(),
        slowPromises(),
    ]).then( renderValue );
}

const slowPromises = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('slow promise');
    }, 2000);
})

const mediumPromises = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Medium promise');
    }, 1500);
})

const fastPromises = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Fast promise');
    }, 1000);
})