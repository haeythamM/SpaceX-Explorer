import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import "./app";
import "./index.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Launches from "./pages/Launches";
const App = () => {
  return (
    <div className="root-container">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand text-danger" to="/">
            SpaceX Launches
          </Link>
          <button
            className="navbar-toggler bg-dark border-white p-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1m0-5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1m0-5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1"
              />
            </svg>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/launches">
                  Launches
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <div className="container py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/launches" element={<Launches />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Outlet />
        </div>
      </main>

      <footer className="footer mt-auto py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5 className="text-light">SpaceX</h5>
              <p className="text-muted">
                Exploring the universe, one launch at a time.
              </p>
            </div>
            <div className="col-md-6">
              <h5 className="text-light">Contact</h5>
              <ul className="list-unstyled text-muted">
                <li>Email: myemail@gmail.com</li>
                <li>Phone: +1 234 567 890</li>
                <li>Address: 1 Rocket Road, Toronto, CA</li>
                <li className="mt-3">
                  <a
                    href="https://www.linkedin.com/in/haeytham/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover-accent"
                  >
                    <i className="fab fa-linkedin me-2"></i>
                    LinkedIn Profile
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/haeythamM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover-accent"
                  >
                    <i className="fab fa-github me-2"></i>
                    GitHub Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-3">
            <p className="text-muted mb-0">
              &copy; {new Date().getFullYear()}Haeytham. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
