import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Launches from './pages/Launches';

const App = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">SpaceX Launches</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/launches">Launches</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/launches" element={<Launches />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Outlet />
      </div>
      <footer className="bg-dark text-white mt-5 p-4 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>SpaceX</h5>
            <p>Exploring the universe, one launch at a time.</p>
          </div>
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: info@spacex.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 1 Rocket Road, Hawthorne, CA</li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <p>&copy; {new Date().getFullYear()} SpaceX. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default App;
