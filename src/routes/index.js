import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { CartPage } from "../pages/CartPage";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/cart">
        <CartPage />
      </Route>
    </Switch>
  );
};
