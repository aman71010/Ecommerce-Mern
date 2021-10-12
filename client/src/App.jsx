import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Pay from './pages/Pay';
import Success from './pages/Success';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  const user = true;
  
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
        <Route path="/pay"> 
          <Pay /> 
        </Route>
        <Route path="/Success"> 
          <Success />
        </Route>
        <Route path="/login"> 
          { user ? <Redirect to="/" /> : <Login /> }
        </Route>
        <Route path="/register"> 
          { user ? <Redirect to="/" /> : <Register /> }
        </Route>
      </Switch>
    </Router>
  );
};

export default App;