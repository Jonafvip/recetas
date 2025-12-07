import { useParams } from "react-router-dom";
import { UseRecetaContext } from "../context/UseRecetaContext";

export const DetallesRecetas = () => {
  const { datosReceta } = UseRecetaContext();
  const { id } = useParams();

  const recetas = datosReceta.find((receta) => receta.id === parseInt(id));

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div
        className="card mb-3"
        style={{ textAlign: "center", width: "1100px" }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={recetas.imagen}
              class="img-fluid rounded-start"
              alt={recetas.imagen}
              style={{ height: "418px" }}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{recetas.receta}</h5>
              <h6>Ingredientes:</h6>
              <ul className="list-group list-group-flush">
                {Object.entries(recetas.Ingredientes).map(
                  ([ingrediente, cantidad], index) => (
                    <li key={index} className="list-group-item">
                      <strong>{ingrediente}:</strong> {cantidad}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
