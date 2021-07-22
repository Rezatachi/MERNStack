import React from "react";
import { Box, Text, Button, Select, Image } from "theme-ui";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "1rem",
        display: "grid",
        gridTemplateColumns: "1fr 4fr 1fr 1fr 1fr",
        gap: "8px",
        bg: "white",
        placeItems: "center",
        mb: "8px",
      }}
    >
      <Image src={item.imageUrl} alt={item.name} />
      <Link
        style={{
          textDecoration: "none",
        }}
        to={`/product/${item.product}`}
      >
        <Text
          sx={{
            textDecoration: "none",
            color: " black",
            fontWeight: "500",
            "@media screen and (max-width: 960px)": {
              fontSize: "1.8rem",
            },
            "@media screen and (max-width: 500px)": {
              fontSize: "0.6",
            },
          }}
        >
          {item.name}
        </Text>
      </Link>
      <Text
        sx={{
          "@media screen and (max-width: 960px)": {
            fontSize: "0.8rem",
            "@media screen and (max-width: 500px)": {
              fontSize: "0.6rem",
            },
          },
        }}
      >
        Price: {item.price}
      </Text>
      <Select
        sx={{
          padding: "10px 17px",
        }}
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
      >
        {" "}
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </Select>

      <FaTrash onClick={() => removeHandler(item.product)} />
    </Box>
  );
};

export default CartItem;
