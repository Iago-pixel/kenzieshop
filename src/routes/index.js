import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { CartPage } from "../pages/CartPage";
import { WebsiteBuilder } from "../pages/WebsiteBuilder";
import { Register } from "../pages/Register";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/cart">
        <CartPage />
      </Route>
      <Route path="/inBuilding">
        <WebsiteBuilder />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
};
