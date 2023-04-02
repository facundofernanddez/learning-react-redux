import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
} from "../reducers/cart/cartSlice";

export const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  const { productList } = useSelector((state) => state.cart);

  const handleAddOrRemoveProduct = (productId) => {
    const product = products.find((product) => product.id === productId);

    if (productList.find((pdt) => pdt.id === productId)) {
      dispatch(removeProductFromCart(productId));
    } else {
      dispatch(addProductToCart(product));
    }
  };

  return (
    <>
      <h1>Listado de productos</h1>
      <div className="row">
        {products.map((product) => {
          return (
            <div key={product.id} className="col-3 mt-3">
              <h4>{product.name}</h4>
              <p>Precio: {product.price}</p>
              <p>Categoria: {product.category}</p>
              <button
                className={`btn ${
                  productList.find((pdt) => pdt.id === product.id)
                    ? "btn-danger"
                    : "btn-success"
                }`}
                onClick={() => {
                  handleAddOrRemoveProduct(product.id);
                }}
              >
                {productList.find((pdt) => pdt.id === product.id)
                  ? "Remove "
                  : "Add "}
                to cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
