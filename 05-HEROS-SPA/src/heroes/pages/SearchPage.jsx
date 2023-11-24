import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { HeroCard } from '../components';
import { useNavbarHeight, useForm } from "../hooks";
import { getHeroeByName } from "../helpers/getHeroeByName";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroeByName(q);

  const navbarHeight = useNavbarHeight();
  const { searchHero, onInputChange } = useForm({
    searchHero: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();

    navigate(`?q=${searchHero.toLowerCase().trim()}`);
  };

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  return (
    <>
      <div className="container" style={{ marginTop: `${navbarHeight}px` }}>
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Buscador de Heroe</h1>
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            <div className="col-md-5 mb-2">
              <form onSubmit={onSearchSubmit}>
                <input
                  type="text"
                  name="searchHero"
                  className="form-control my-3"
                  autoComplete="off"
                  value={searchHero}
                  onChange={onInputChange}
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
              <div className="alert alert-primary text-center animate__animated animate__fadeIn" style={{display: showSearch ? '' : 'none' }}>Buscando heroe </div>
              <div className="alert alert-danger text-center animate__animated animate__fadeIn" style={{display: showError ? '' : 'none' }}>No exite un heroe <b>{q}</b></div>
            </div>

            <div className="d-flex justify-content-between flex-wrap">
              {
                heroes.map(heroe => (
                  <HeroCard key={heroe.id} {...heroe} />
                ))
              }
            </div>

          </div>
        </div>
      </div>
    </>
  );
};