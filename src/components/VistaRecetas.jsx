import recetas from "../data/recetas.json";
import { Rating } from "primereact/rating";
import { Link } from "react-router-dom";

export const VistaRecetas = () => {
  return (
    <div className="d-flex justify-content-center  flex-wrap gap-4 p-3">
      {recetas.map((receta) => (
        <div className="card " style={{ width: "18rem" }} key={receta.id}>
          <img
            src={receta.imagen}
            className="card-img-top"
            alt={receta.imagen}
          />
          <div className="card-body">
            <h5 className="card-title">{receta.receta}</h5>
            <Rating value={5} readOnly cancel={false} />
            <button className="btn btn-primary" style={{ marginTop: "10px" }}>
              Ver receta
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
