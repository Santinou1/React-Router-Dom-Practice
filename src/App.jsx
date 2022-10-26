import { useState } from "react";
import { Link, Route, Routes, useParams, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  const Home = () => <h1>Holaaa</h1>;

  const Tacos = () => {
    const { taco } = useParams();

    return (
      <div>
        <Outlet />
        <h1>Tacos</h1>
        {taco}
        <Link to="details">Ir a los detalles</Link>
      </div>
    );
  };

  const TacoDetails = () => {
    const { taco } = useParams();
    return (
      <div>
        <h1>Detalle del Taco {taco}</h1>
      </div>
    );
  };

  const SearchPage = () => {
    const tacos = ["cochinita", "chili", "carnita", "quesadilla"];

    return (
      <div>
        <ul>
          <h1>Search page</h1>
          {tacos.map((taco) => (
            <li key={taco}>
              <Link to={`/tacos/${taco}`}>{taco}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const ErrorCode = () => {
    return <h1>ERROR 404</h1>;
  };

  return (
    <div className="App">
      <header>
        <h1>Aprendiendo react</h1>
        <nav>
          <ul>
            <li>
              <Link to="/search-page"> Search Page </Link>
            </li>
            <li>
              <Link
                className={({ isActive }) => {
                  return isActive ? "is-active" : undefined;
                }}
                to="/"
              >
                
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/tacos/:taco" element={<Tacos />}>
          <Route path="details" element={<TacoDetails />} />
        </Route>
        <Route path="*" element={<ErrorCode />} />
      </Routes>
    </div>
  );
}

export default App;
