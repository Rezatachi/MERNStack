import React from "react";

import { Container } from "theme-ui";
const Backdrop = ({ show, click }) => {
  return (
    show && (
      <Container
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 100,
          position: "fixed",
          top: 0,
          left: 0,
        }}
        onClick={click}
      ></Container>
    )
  );
};

export default Backdrop;
