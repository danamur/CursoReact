import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroeById } from "../helpers";
import { useNavbarHeight } from "../hooks";

export const HeroPage = () => {

  const navbarHeight = useNavbarHeight();
  const navigate = useNavigate();

  const { name } = useParams();

  const heroe = getHeroeById(name);

  const onNavigateBack = () => {
    navigate(-1);
  }

  if (!heroe) {
    return <Navigate to={'/marvel'} />;
  }

  return (
    <>
      <div className="container" style={{ marginTop: `${navbarHeight}px` }}>
        <div className="row">
          <div className="col-md-12 text-center mb-5">
            <h1>{ heroe.name }</h1>
          </div>
          <div className="col-md-4">
            <img src={heroe.images.lg} alt="" className="img-thumbnail" />
          </div>
          <div className="col-md-8">
            <ul className="list-group list-group-flush">
              <li className="list-group-item list-group-item-action list-group-item-dark"><b>Fullname:</b> { heroe.biography.fullName } </li>
              <li className="list-group-item list-group-item-action list-group-item-dark"><b>Alte ego:</b> { heroe.biography.alterEgos } </li>
              <li className="list-group-item list-group-item-action list-group-item-dark"><b>Publisher:</b> { heroe.biography.publisher } </li>
              <li className="list-group-item list-group-item-action list-group-item-dark"><b>First Appearance:</b> { heroe.biography.firstAppearance } </li>
              <li className="list-group-item list-group-item-action list-group-item-dark"><b>Work:</b> { heroe.work.occupation   } </li>
              <li className="list-group-item list-group-item-action list-group-item-dark"><b>Height:</b> { heroe.appearance.height[1] } </li>
              <li className="list-group-item list-group-item-action list-group-item-dark"><b>Weight:</b> { heroe.appearance.weight[1] } </li>
            </ul>

            <button className="btn btn-outline-danger mt-5" onClick={ onNavigateBack }>Regresar</button>
          </div>
        </div>
      </div>
    </>
  );
};
