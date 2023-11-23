import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { HeroCard } from '../components';
import { useNavbarHeight, useForm } from "../hooks";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const navbarHeight = useNavbarHeight();
  const { searchHero, onInputChange } = useForm({
    searchHero: ''
  });

  const { q = '' } = queryString.parse( location.search );

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchHero.trim().length <= 1) {
      return;
    }

    console.log("Realizando búsqueda de héroe:", searchHero);

    navigate(`?q=${searchHero.toLowerCase().trim()}`);
  };

  return (
    <>
      <div className="container" style={{ marginTop: `${navbarHeight}px` }}>
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Buscador de Heroe</h1>
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            <div className="col-md-5 mb-2">
              <form onSubmit={ onSearchSubmit }>
                <input 
                  type="text"
                  name="searchHero"
                  className="form-control my-3"
                  autoComplete="off"
                  value={ searchHero }
                  onChange={ onInputChange }
                />
              </form>
            </div>
          </div>
          
          <hr />

          <div className="col-md-12">
            <div className="col-md-12 text-center">
              <h1>Resultados</h1>
            </div>
            <div className="col-md-12">
              <div className="alert alert-primary text-center">
                Buscando heroe
              </div>
              <div className="alert alert-danger text-center">
                No exite un heroe <b>{ q }</b>
              </div>
            </div>

            {/*<HeroCard {...heroe}/>*/}

          </div>
        </div>
      </div>
    </>
  );
};