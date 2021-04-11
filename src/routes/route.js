import { Switch, Route } from "react-router-dom";
import { About, Home } from "../page";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
    </Switch>
  );
};
export default Routes;
