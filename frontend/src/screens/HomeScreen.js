import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Text, Spinner } from "theme-ui";
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";
const HomeScreen = () => {
  // Create dispatch variable
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      <Text
        color="primary"
        sx={{
          fontSize: 4,
          fontWeight: 600,
          ml: "5rem",
        }}
      >
        Latest Products
      </Text>
      <Container
        sx={{
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        }}
      >
        {loading ? (
          <h1>Loading</h1>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              productId={product._id}
              key={product._id}
              name={product.name}
              price={product.price}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))
        )}
      </Container>
    </div>
  );
};

export default HomeScreen;
