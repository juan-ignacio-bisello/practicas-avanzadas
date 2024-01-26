
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwait2Component = async( element ) => {

    console.time('start');

    // const value1 = await slowPromises();
    // const value2 = await mediumPromises();
    // const value3 = await fastPromises();

    const [value1, value2, value3] = await Promise.all([
        slowPromises(),
        mediumPromises(),
        fastPromises(),
    ]);
    console.timeEnd('start');

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