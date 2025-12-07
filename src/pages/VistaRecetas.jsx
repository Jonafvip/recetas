import { Rating } from "primereact/rating";
import "./VistaRecetas.css";
import { Link } from "react-router-dom";
import { UseRecetaContext } from "../context/UseRecetaContext";

export const VistaRecetas = () => {
  const { datosReceta, terminoBusqueda } = UseRecetaContext();

  const recetasFiltradas = datosReceta.filter((receta) => {
    const nombreCoincide = receta.receta
      .toLowerCase()
      .includes(terminoBusqueda.toLowerCase());

    const ingredientesCoinciden = Object.keys(receta.Ingredientes || {}).some(
      (ingrediente) =>
        ingrediente.toLowerCase().includes(terminoBusqueda.toLowerCase())
    );

    return nombreCoincide || ingredientesCoinciden;
  });

  return (
    <div className="d-flex justify-content-center  flex-wrap gap-4 p-3 ">
      {recetasFiltradas.length > 0 ? (
        recetasFiltradas.map((receta) => (
          <div className="card " style={{ width: "18rem" }} key={receta.id}>
            <img
              src={receta.imagen}
              className="card-img-top image-receta"
              alt={receta.imagen}
            />
            <div className="card-body">
              <h5 className="card-title">{receta.receta}</h5>
              <Rating
                value={4}
                readOnly
                cancel={false}
                style={{ display: "flex", flexWrap: "wrap" }}
              />
              <Link
                className="btn btn-primary"
                style={{ marginTop: "10px" }}
                to={`/detalleRecetas/${receta.id}`}
              >
                Ver Ingredientes
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center p-5">
          <h3>No se encontraron recetas</h3>
          <p className="text-muted">Intenta con otro término de búsqueda</p>
        </div>
      )}
    </div>
  );
};
