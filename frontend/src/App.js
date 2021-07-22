import React, { useState } from "react";

// Components
import Nav from "./components/Nav";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import { Switch, Route } from "react-router-dom";

function App() {
  const [sideToggle, setsideToggle] = useState(false);

  return (
    <>
      <Nav click={() => setsideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setsideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setsideToggle(false)} />

      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path={`/product/:id`} component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
    </>
  );
}

export default App;
