import recetas from "../data/recetas.json";
import { Rating } from "primereact/rating";
import "./VistaRecetas.css";
import { Link } from "react-router-dom";

export const VistaRecetas = () => {
  return (
    <div className="d-flex justify-content-center  flex-wrap gap-4 p-3">
      {recetas.map((receta) => (
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
              Ver receta
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
