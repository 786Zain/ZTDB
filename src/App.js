import logo from "./logo.svg";
import "./App.css";
import { Navigation } from "./components/ui/index";
import {default as Login} from "./pages/Login"
import {default as TableTemp} from "./pages/tables"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      {/* <Navigation /> */}
      <Router>
        {/* <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About Us</Link>
            </li>

            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div> */}
        <Routes>
          <Route exact path="/Dashboard" element={<Navigation />}></Route>
          <Route exact path="/Table" element={<TableTemp />}></Route>
           <Route exact path="/" element={<Login />}></Route>
{/*
          <Route exact path="/contact" element={<Contact />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;