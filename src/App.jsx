import { Index } from "./pages";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./components/Cart";
import { useSelector } from "react-redux";

export const App = () => {
  const { totalCount } = useSelector((state) => state.cart);

  return (
    <main className="container">
      <div className="d-flex py-4">
        <Link className="btn btn-success mx-2" to="/">
          Login
        </Link>
        <Link className="btn btn-success mx-2" to="/home">
          Home
        </Link>
        <div className="ms-auto">
          <Link className="btn btn-primary position-relative " to="/cart">
            Cart
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalCount}
              <span className="visually-hidden">products in cart </span>
            </span>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  );
};
