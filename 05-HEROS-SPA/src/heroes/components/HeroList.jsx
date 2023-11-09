import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="d-flex justify-content-between flex-wrap">
            {heroes.map( heroe => (
                <HeroCard 
                    key={ heroe.id }
                    { ...heroe }
                />
            ))};
        </div>
    );
};
