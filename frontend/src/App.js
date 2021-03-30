import './App.css';
import { Navbar } from "./components/Navbar";
import { History } from "./components/page2/History";
import { Home } from "./components/page1/Home";
import { Login } from "./components/login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
