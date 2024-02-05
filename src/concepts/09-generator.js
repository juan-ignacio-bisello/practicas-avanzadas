
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionComponent = ( element ) => {

    // const mygenerator = myFirstGeneratorFunction();

    // console.log( mygenerator.next() );
 

    const genId = idGenerator();
    
    const button = document.createElement('button');
    button.innerText = 'click me';
    element.append( button );

    const renderButton = ( ) => {
        const { value } = genId.next()
        button.innerText = `click ${ value }`;

    }

    button.addEventListener('click', renderButton );
}

function* idGenerator() {
    let curretId = 0;
    while(true) {
        yield ++curretId;
    }
}

function* myFirstGeneratorFunction() {

    yield 'primer valor';
    yield '2 valor';
    yield '3 valor';
    yield '4 valor';

    return 'ya no hay valores';
}