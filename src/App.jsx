import { Home } from "./pages/Home";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Header } from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetallesRecetas } from "./pages/DetallesRecetas";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detalleRecetas/:id" element={<DetallesRecetas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
