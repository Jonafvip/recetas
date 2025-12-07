import { Link } from "react-router-dom";
import { UseRecetaContext } from "../context/UseRecetaContext";

export const Header = () => {
  const { terminoBusqueda, setTerminoBusqueda } = UseRecetaContext();

  const handleBuscar = () => {
    // Si hay texto, limpiar la búsqueda; si no, no hacer nada
    if (terminoBusqueda) {
      setTerminoBusqueda("");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div
        className="container-fluid"
        style={{ backgroundColor: "rgba(239, 239, 239)" }}
      >
        <Link className="navbar-brand" to="/">
          Recetas de Comida
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item d-flex flex-colums">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar receta..."
                aria-label="Search"
                value={terminoBusqueda}
                onChange={(e) => setTerminoBusqueda(e.target.value)}
              />
              <button
                className="btn btn-outline-primary"
                onClick={handleBuscar}
              >
                {terminoBusqueda ? "Limpiar" : "Buscar"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
