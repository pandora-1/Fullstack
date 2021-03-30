import './App.css';
import Navbar from "./components/Navbar";
import History from "./components/page2/History";
import Home from "./components/page1/Home";
import Login from "./components/login/Login";
import {AuthProvider} from "./Auth";
import PrivateRoute from "./PrivateRoute";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar/>
            <PrivateRoute exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/history" component={History}/>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
