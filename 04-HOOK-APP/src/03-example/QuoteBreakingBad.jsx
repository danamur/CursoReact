import { useLayoutEffect, useRef, useState } from "react";

export const QuoteBreakingBad = ({ author, quote }) => {

  // Creamos una referencia (pRef) al elemento de párrafo (p) para medir su tamaño.
  const pRef = useRef();

  // Utilizamos el estado (boxSize) para almacenar el ancho y alto del párrafo.
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  // Usamos useLayoutEffect para medir el tamaño del párrafo cuando cambia la cita (quote).
  useLayoutEffect(() => {
    // Obtenemos el ancho y alto del párrafo utilizando getBoundingClientRect.
    const {width, height} = (pRef.current.getBoundingClientRect());
    // Actualizamos el estado (boxSize) con el nuevo ancho y alto.
    setBoxSize({width, height});
  }, [quote]);

  return (
    <>
      <blockquote className="blockquote text-light text-end">
        <p ref={pRef} className="mb-3">"{quote}"</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
