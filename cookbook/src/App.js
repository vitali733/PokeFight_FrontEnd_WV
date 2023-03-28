import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './comp/Home';
import About from './comp/About';
import Contact from './comp/Contact';
import Navbar from './comp/Navbar';

function App() {
  return (
    <div>
      {/* <nav>
        <NavLink to={"/Home"}>
            Home
        </NavLink>
      </nav> */}
    
    <BrowserRouter>
      <div>
        <Navbar />
        <Home />
        <Routes>
          <Route exact path="/Home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
