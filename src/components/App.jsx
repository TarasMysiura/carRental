import { Loader } from "./Loader/Loader";
import { NavLink, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import { Container, Navigate } from "./App.styled";

const HomePage = lazy(() => import("pages/HomePage"));
const CatalogPage = lazy(() => import("pages/CatalogPage"));

export const App = () => {
  return (
    <Container>
      <header>
        <Navigate>
          <NavLink to="/">
            <h2>Home</h2>{" "}
          </NavLink>
          <NavLink to="/catalog">
            <h2>Catalog</h2>
          </NavLink>
        </Navigate>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
          </Routes>
        </Suspense>
        <ToastContainer />
      </main>
      <footer></footer>
    </Container>
  );
};
