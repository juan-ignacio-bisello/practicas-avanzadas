import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promisesComponent = ( element ) => {

    
    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    }

    const renderError = ( error ) => {
        element.innerHTML = `
            <h3>${ error } </h3>
        `
    }
    const id1 = '5d86371f97c29d020f1e1f6d';
    findHero( id1 )
        .then( renderHero )
        .catch( renderError );
}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = ( id ) => {

    return new Promise( ( resolve, reject )=> {
        
        const hero = heroes.find( hero => hero.id === id );

        if ( hero ) {
            resolve( hero );
            return;
        };

        reject(`Hero  with id ${ id } not found`);
    })
    

}