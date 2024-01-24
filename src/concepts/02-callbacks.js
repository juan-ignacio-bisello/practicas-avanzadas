import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = ( element ) => {

    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371fd55e2e2a30fe1ccb1';

    findHero( id1, (error, cualquierNombre1) => {
        
        if ( error ){
            element.innerHTML = error;
            return;
        }

        findHero( id2, (error, cualquierNombre2) => {

            if ( error ){
                element.innerHTML = error;
                return;
            }

            element.innerHTML = `${ cualquierNombre1.name } / ${cualquierNombre2.name } `;
        });

        //element.innerHTML = cualquierNombre?.name || 'No hay heroe';
        //element.innerHTML = cualquierNombre.name;

    } );
}
/**
 * 
 * @param {String} id 
 * @param { ( error: string|null, hero: object)=> void } callback 
 */
const findHero =  (id, callback ) => {

    const hero = heroes.find( hero => hero.id === id );

    if ( !hero ) {
        callback(`Hero whith id ${ id } not found.`)
        return;
    }

    callback( null, hero );
}