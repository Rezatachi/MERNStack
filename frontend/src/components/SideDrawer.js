import React from "react";
import "../styles/SideDrawer.css";
import { Container, Text, Box } from "theme-ui";
import { Link } from "react-router-dom";
const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sideDrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }
  return (
    <Container
      sx={{
        width: "70%",
        height: "100vh",
        background: "white",
        top: 0,
        left: 0,
        position: "fixed",
        zIndex: 200,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        "@media screen and (min-width: 960px)": {
          display: "none",
        },
      }}
      className={sideDrawerClass.join(" ")}
    >
      <Box
        onClick={click}
        sx={{
          mt: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          p={3}
          sx={{
            fontSize: "1.2rem",
            fontWeight: "500",
            color: "black",
          }}
        >
          <Link to="/">Shop</Link>
        </Text>
        <Text
          sx={{
            fontSize: "1.2rem",
            fontWeight: "500",
            borderRadius: "10%",
            marginRight: 3,
          }}
        >
          <Link to="/cart">Cart</Link>
        </Text>
      </Box>
    </Container>
  );
};

export default SideDrawer;
