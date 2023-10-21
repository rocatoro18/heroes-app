import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../helpers";

export const HeroList = ({publisher}) => {

    const heroes = getHeroesByPublisher(publisher);
    //console.log(heroes);

    return (
        <>
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {
                    heroes.map(hero => (
                        // DESESTRUCTURAR EL HERO PARA MANDARLO AL HEROCARD ...hero
                        <HeroCard key={hero.id} {...hero}/>
                    ))
                }
            </div>
        </>
    )
}