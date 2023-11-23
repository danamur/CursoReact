import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroeById } from "../helpers";
import { useNavbarHeight } from "../hooks";
import { useMemo } from "react";

export const HeroPage = () => {
  const navbarHeight = useNavbarHeight();
  const navigate = useNavigate();

  const { name } = useParams();

  const heroe = useMemo( () => getHeroeById(name), [ name ]);

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!heroe) {
    return <Navigate to={"/marvel"} />;
  }

  return (
    <>
      <div className="container" style={{ marginTop: `${navbarHeight}px` }}>
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>{heroe.name}</h1>
          </div>
          <div className="col-md-4 animate__animated animate__fadeInLeftBig animate__slow">
            <img src={heroe.images.lg} alt="" className="img-thumbnail" />
          </div>
          <div className="col-md-8 animate__animated animate__lightSpeedInLeft">
            <p>
              <b>Fullname:</b> {heroe.biography.fullName}
            </p>
            <p>
              <b>Alte ego:</b> {heroe.biography.alterEgos}
            </p>
            <p>
              <b>Publisher:</b> {heroe.biography.publisher}{" "}
            </p>
            <p>
              <b>First Appearance:</b> {heroe.biography.firstAppearance}{" "}
            </p>
            <p>
              <b>Work:</b> {heroe.work.occupation}{" "}
            </p>
            <p>
              <b>Height:</b> {heroe.appearance.height[1]}{" "}
            </p>
            <p>
              <b>Weight:</b> {heroe.appearance.weight[1]}{" "}
            </p>

            <button
              className="btn btn-outline-danger mt-5"
              onClick={onNavigateBack}
            >
              Regresar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
