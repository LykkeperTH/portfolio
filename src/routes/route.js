import { Switch, Route } from "react-router-dom";
import { About, Home } from "../page";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  );
};
export default Routes;
