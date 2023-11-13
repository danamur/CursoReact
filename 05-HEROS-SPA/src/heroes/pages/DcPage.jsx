import { useEffect, useState } from "react";
import { HeroList } from "../components"
import { useNavbarHeight } from "../hooks";

export const DcPage = () => {

  const navbarHeight = useNavbarHeight();
  const publisher = 'DC Comics';

  return (
    <>
      <div className="container" style={{ marginTop: `${navbarHeight}px` }}>
        <div className="row mb-3">
          <h1>{publisher}</h1>
        </div>

        <HeroList publisher={publisher} />
      </div>
    </>
  );
};
