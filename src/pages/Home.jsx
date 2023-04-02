import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unsetUser } from "../reducers/users/userSlice";
import { useNavigate } from "react-router-dom";
import { ProductList } from "../components/ProductList";
import axios from "axios";

export const Home = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/cart").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const handleLogout = () => {
    dispatch(unsetUser());
    navigate("/");
  };

  return (
    <>
      <h1>Home</h1>
      <p>
        Welcome {user.fullName} / {user.email}
      </p>
      <button className="btn btn-primary" onClick={handleLogout}>
        Log out
      </button>
      <hr />
      <ProductList products={products} />
    </>
  );
};
