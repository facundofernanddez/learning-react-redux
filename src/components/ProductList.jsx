export const ProductList = ({ products }) => {
  return (
    <>
      <h1>Listado de productos</h1>
      {products.map((product) => {
        <div key={product.id} className="col-3 mt-3">
          <h4>{product.name}</h4>
          <p>Precio: {product.price}</p>
          <p>Categoria: {product.category}</p>
        </div>;
      })}
    </>
  );
};
