import { createContext, useContext, useState } from "react";
import recetas from "../data/recetas.json";

const RecetaContext = createContext();

export const UseRecetaContext = () => {
  const receta = useContext(RecetaContext);

  if (!receta) {
    throw new Error("UseRecetaContext debe usarse dentro del provider");
  }
  return receta;
};

export const UseRecetaProvider = ({ children }) => {
  const [datosReceta, setdatosReceta] = useState(recetas);
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  const agregarReceta = (nuevaReceta) => {
    const nuevoId = Math.max(...datosReceta.map((r) => r.id), 0) + 1;

    const recetaConId = {
      ...nuevaReceta,
      id: nuevoId,
    };

    setdatosReceta([...datosReceta, recetaConId]);
    return recetaConId;
  };

  const value = {
    datosReceta,
    agregarReceta,
    terminoBusqueda,
    setTerminoBusqueda,
  };
  return (
    <RecetaContext.Provider value={value}>{children}</RecetaContext.Provider>
  );
};
