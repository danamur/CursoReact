import { useEffect, useState } from "react";

export const useNavbarHeight = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector('.navbar');
    if (header) {
      setNavbarHeight(header.offsetHeight);
    }
  }, []);

  return navbarHeight;
};