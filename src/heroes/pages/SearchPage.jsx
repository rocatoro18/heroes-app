import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import {HeroCard} from '../components';
import { getHeroesByName } from '../helpers';
import { useMemo } from 'react';

export const SearchPage = () => {

    // Obtener la navegacion
    const navigate = useNavigate();
    // Obtener localizacion de donde nos encontramos
    const location = useLocation();
    
    // NOSOTROS LO PODEMOS PARSEAR POR NUESTRA CUENTA PERO EN ESTE CASO
    // DECIDI USAR EL PAQUETE QUERYSTRING
    // SIEMPRE SON OPCIONALES LOS QUERY PARAMETERS
    const {q = ''} = queryString.parse(location.search);
    
    const heroes = useMemo(()=>getHeroesByName(q),[q]);

    const {searchText,onInputChange} = useForm({
        searchText:q
    });

    const onSearchSubmit = (event) => {
        // preventDefault(); EVITAR PROPAGACION DEL FORMULARIO
        event.preventDefault();
        if(searchText.trim().length <= 1) return;
        navigate(`?q=${searchText}`)
    }

    return(
        <>
            <h1>Search</h1>
            <hr/>
            <div className="row">
            <div className="col-5">
                <h4>Searching</h4>
                <hr/>
                <form onSubmit={onSearchSubmit}>
                    <input
                        type="text"
                        placeholder="Search a hero"
                        className="form-control"
                        name="searchText"
                        autoComplete="off"
                        value={searchText}
                        onChange={onInputChange}
                    />
                    <button className="btn btn-outline-primary mt-1">
                        Search
                    </button>
                </form>
            </div>
            
            <div className="col-7">
                <h4>Results</h4>
                <hr/>

                <div className="alert alert-primary">
                    Search a hero
                </div>

                <div className="alert alert-danger">
                    No hero with <b>{q}</b>
                </div>

                {
                    heroes.map(hero => (
                        <HeroCard key={hero.id} {...hero}/>
                    ))
                }

                {/*<HeroCard {...hero}/>*/}
                
            </div>
            </div>
        </>
    )
}