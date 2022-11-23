import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./page/Welcome";
import Product from "./page/Product";
import MainHader from "./components/MainHader";
import ProductDetail from "./page/ProductDetail";
function App() {
  return (
    <div>
      <MainHader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome"></Redirect>
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Product />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
