import { HeroList } from "../components";
import { useNavbarHeight } from "../hooks";

export const MarvelPage = () => {

  const navbarHeight = useNavbarHeight();
  const publisher = 'Marvel Comics';

  return (
    <>
      <div className="container" style={{ marginTop: `${navbarHeight}px` }}>
        <div className="row mb-3">
          <h1>{ publisher }</h1>
        </div>

        <HeroList publisher={publisher}/>
      </div>
    </>
  );
};
