import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaiComponent = async( element ) => {

    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f2343e37870b91ef1';

    try {
        const hero1 = await findHero( id1 );
        const {name: hero2} = await findHero( id2 );

        element.innerHTML = `${ hero1.name } / ${ hero2 }`;
    
    } catch ( error ) {
        element.innerHTML = error;
    }

    

}

const findHero = async( id ) => {

    const hero = heroes.find( hero => hero.id === id );
    if ( !hero )
        throw `Hero not found`;

        return hero;
}