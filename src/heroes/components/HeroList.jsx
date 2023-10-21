import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../helpers";
import { useMemo } from "react";

export const HeroList = ({publisher}) => {

    // USEMEMO MEMORIZA VALORES
    // USECALLBACK MEMORIZA FUNCIONES
    const heroes = useMemo(()=>getHeroesByPublisher(publisher),[publisher]);
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