import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = ( element ) => {

    const id = '5d86371f1efebc31def272e2'
    findHero( id, (cualquierNombre) => {
        
        element.innerHTML = cualquierNombre.name;

    } );
}
/**
 * 
 * @param {String} id 
 * @param { (hero: object)=> void } callback 
 */
const findHero =  (id, callback ) => {

    const hero = heroes.find( hero => hero.id === id );

    callback( hero );
}