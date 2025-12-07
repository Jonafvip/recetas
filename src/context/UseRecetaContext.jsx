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

  const value = {
    datosReceta,
  };
  return (
    <RecetaContext.Provider value={value}>{children}</RecetaContext.Provider>
  );
};
