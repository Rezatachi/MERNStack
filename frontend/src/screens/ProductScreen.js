import { Box, Button, Container, Text, Image } from "@theme-ui/components";
import { Select } from "theme-ui";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = ({ match, history }) => {
  const [qty, setqty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(`/cart`);
  };
  return (
    <Container
      sx={{
        maxWidth: "1300px",
        margin: "1rem auto",
        display: "flex",
        "@media screen and (max-width: 960px)": {
          flexDirection: "column",
        },
      }}
    >
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <Image
            sx={{
              marign: "1rem",
              flex: 0.6,
              "@media screen and (max-width: 960px)": {
                flex: "1",
              },
            }}
            src={product.imageUrl}
            alt={product.name}
          />
          <Box
            sx={{
              bg: "white",
              borderRadius: "10px",
              flex: 0.4,
              margin: "4rem",
              height: "250px",
              "@media screen and (max-width: 960px)": {
                flexDirection: "column",
                flex: 1,
              },
            }}
          >
            <Text
              sx={{
                display: "grid",
                padding: "1rem",
              }}
            >
              {product.name}
            </Text>
            <br />
            <Text
              sx={{
                display: "grid",
                padding: "1rem",
              }}
            >
              {product.description} <br></br>
            </Text>
          </Box>
          <Box
            sx={{
              flex: 0.2,
              width: "250px",
              margin: "1rem",
              bg: "white",
              textAlign: "left",
              height: "300px",
              "@media screen and (max-width: 960px)": {
                flex: "1",
                padding: "1rem",
              },
            }}
          >
            <Text sx={{ display: "grid", padding: "1rem" }}>
              Price: {product.price}
            </Text>
            <Text sx={{ display: "grid", padding: "1rem" }}>
              Status:{" "}
              <span>
                {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </Text>
            <Text sx={{ display: "grid", padding: "1rem" }}>
              Qty:
              <Select value={qty} onChange={(e) => setqty(e.target.value)}>
                {/* // Grabs how much is in stock */}
                {[...Array(product.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </Select>
            </Text>
            <Button
              sx={{
                gridColumn: "1/-1",
                bg: "#DCCCA3",
                color: "black",
                mx: "2rem",
              }}
              onClick={addToCartHandler}
            >
              Add to Cart
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};

export default ProductScreen;
