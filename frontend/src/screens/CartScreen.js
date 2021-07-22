import React from "react";
import { Container, Text, Box, Divider, Button } from "theme-ui";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
//Cart Item
import CartItem from "../components/CartItem";
const CartScreen = () => {
  // Create dispatch
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };
  return (
    <>
      <Container
        sx={{
          width: "1300px",
          height: "800px",
          bg: "white",
          margin: "0 auto",
          mb: "5rem",
          borderRadius: "8px",
          display: "flex",
        }}
      >
        <Box>
          <Text
            sx={{
              color: "black",
              fontSize: "3rem",
              fontWeight: "bold",
              pl: 4,
              pt: 2,
            }}
          >
            Shopping Cart
          </Text>
          <Divider />

          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </Box>
      </Container>
      <Box
        sx={{
          width: "500px",
          flex: 0.3,
          bg: "white",
          boxShadow: "0 1px 4px rgba(0,0,0,0.4)",
          height: "fit-content",
          borderBottom: "1px solid rgba(0,0,0,0.2)",
          padding: "8px",
          margin: "0 auto",
          mb: "4rem",
        }}
      >
        <Text
          sx={{
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Subtotal ({getCartCount()}) items
        </Text>
        <br></br>
        <Text
          sx={{
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          Price: ({getCartSubTotal()})
        </Text>
        <br />
        <Button
          sx={{
            bg: "darkred",
            padding: "10px 10px",
            cursor: "pointer",
          }}
        >
          Checkout
        </Button>
      </Box>
    </>
  );
};

export default CartScreen;
