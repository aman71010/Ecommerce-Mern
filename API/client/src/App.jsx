import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Success from './pages/Success';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> 
          <Home /> 
        </Route>
        <Route path="/products/">
          <ProductList/> 
        </Route>
        <Route path="/product/">
          <Product />
        </Route>
        <Route path="/cart"> 
          <Cart /> 
        </Route>
        <Route path="/Success"> 
          <Success />
        </Route>
        <Route path="/login"> 
          <Login />
        </Route>
        <Route path="/register"> 
          <Register />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;