import React from "react";
import { Container, Text, NavLink, Flex, MenuButton } from "theme-ui";
import { Link } from "react-router-dom";

const Nav = ({ click }) => {
  return (
    <Container
      sx={{
        minHeight: "12vh",
        width: "100",
        display: "flex",
        justifyContent: "space-between",
        px: 5,
        alignItems: "center",
      }}
    >
      {/* Text */}

      <Text
        color="white"
        sx={{
          fontSize: "2rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "0.1rem",
        }}
      >
        Zen Shopping
      </Text>

      {/* Links */}
      <Flex
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <NavLink
          p={3}
          sx={{
            fontSize: "1rem",
            marginRight: 3,
            "@media screen and (max-width: 960px)": {
              display: "none",
            },
          }}
        >
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/"
          >
            Shop
          </Link>
        </NavLink>
        <NavLink
          px={3}
          py={2}
          sx={{
            fontSize: "1rem",
            background: "white",
            borderRadius: "10%",
            marginRight: 3,
            "@media screen and (max-width: 960px)": {
              display: "none",
            },
          }}
        >
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/cart"
          >
            Cart
          </Link>
        </NavLink>{" "}
        <MenuButton
          aria-label="Toggle Menu"
          sx={{
            display: "none",
            "@media screen and (max-width: 960px)": {
              display: "block",
            },
          }}
          onClick={click}
        />
      </Flex>
    </Container>
  );
};

export default Nav;
