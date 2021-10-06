import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Pay from './pages/Pay';
import Success from './pages/Success';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/pay" component={Pay}/>
        <Route exact path="/Success" component={Success}/>
      </Switch>
    </Router>
  );
};

export default App;