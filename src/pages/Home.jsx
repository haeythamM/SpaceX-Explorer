import React from "react";
import { FaEnvelope, FaInfoCircle, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero bg-dark text-light py-5">
        <div className="container text-center">
          <h1 className="display-4 mb-4 fw-bold">
            Welcome to Space Explorer 🚀
          </h1>
          <p className="lead mb-4">
            Discover the latest space missions and explore the cosmos
          </p>
          <div className="row g-4 py-3">
            <div className="col-md-6">
              <div className="p-4 border rounded bg-gradient-primary">
                <h3>Latest Launches</h3>
                <p>Explore recent and upcoming SpaceX missions</p>
                <Link to="/launches" className="btn btn-light btn-lg mt-3">
                  View Launches <FaRocket className="ms-2" />
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-4 border rounded bg-gradient-secondary">
                <h3>About Us</h3>
                <p>Learn about our mission and vision</p>
                <Link to="/about" className="btn btn-light btn-lg mt-3">
                  Discover More <FaInfoCircle className="ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features py-5">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose Us?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow">
                <div className="card-body text-center">
                  <FaRocket className="text-primary display-4 mb-3" />
                  <h3 className="card-title">Real-time Data</h3>
                  <p className="card-text">
                    Get up-to-date information on SpaceX launches and missions
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow">
                <div className="card-body text-center">
                  <FaInfoCircle className="text-success display-4 mb-3" />
                  <h3 className="card-title">Detailed Information</h3>
                  <p className="card-text">
                    Comprehensive details about each mission and its objectives
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow">
                <div className="card-body text-center">
                  <FaEnvelope className="text-danger display-4 mb-3" />
                  <h3 className="card-title">Stay Updated</h3>
                  <p className="card-text">
                    Subscribe to receive notifications about upcoming launches
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta  text-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Ready to Explore?</h2>
          <p className="mb-4">
            Start your journey through space exploration today
          </p>
          <Link to="/launches" className="btn btn-light btn-lg">
            View Launch Schedule <FaRocket className="ms-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
