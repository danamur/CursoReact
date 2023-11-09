import { Navigate, useParams } from "react-router-dom"
import { getHeroeById } from "../helpers";

export const HeroPage = () => {

  const { slug } = useParams();

  const heroe = getHeroeById(slug);

  if (!heroe) {
    return <Navigate to={'/marvel'} />;
  }

  console.log(heroe);

  return (
    <h1>HeroPage</h1>
  );
};
