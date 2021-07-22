import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Container, Text } from "theme-ui";
const Product = ({ imageUrl, name, price, description, productId }) => {
  return (
    <Container
      sx={{
        width: "300px",
        padding: "1rem",
        background: "white",
        margin: "8px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "10px",
      }}
    >
      <img src={imageUrl} alt={name} />
      <Box
        sx={{
          textAlign: "left",
        }}
      >
        <Text
          sx={{
            fontSize: "1rem",
            fontWeight: "500",
            overflow: "hidden",
            marginBottom: 10,
          }}
        >
          {name}
        </Text>
        <br />
        <Text
          sx={{
            pb: "8px",
          }}
        >
          {description.substring(0, 100)}...
          <br></br>
        </Text>
        <Text
          sx={{
            fontWeight: "bold",
          }}
        >
          {price}
        </Text>
        <Link to={`/product/${productId}`}>
          <Button
            sx={{
              ml: "4rem",
              bg: "#DCCCA3",
              color: "white",
            }}
          >
            View
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Product;
