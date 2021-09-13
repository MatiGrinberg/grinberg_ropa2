import './App.css';
import NavBar from './Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Login';
// import NavBar from './Header';
import Home from './Home';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <NavBar/>
            <Home/>
          </Route>
          <Route path="/checkout">
            <NavBar/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>

    </div>
    </Router>
    
  );
}

export default App;
