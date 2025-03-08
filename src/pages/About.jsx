import React, { useEffect, useState } from "react";
import { fetchCompanyInfo } from "../components/About";
import "./About.css";

const About = () => {
  const [companyInfo, setCompanyInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCompanyInfo = async () => {
      try {
        const data = await fetchCompanyInfo();
        setCompanyInfo(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getCompanyInfo();
  }, []);

  if (loading) {
    return (
      <div className="about-page min-vh-100 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-accent" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="about-page min-vh-100 d-flex align-items-center justify-content-center">
        <div className="alert alert-danger text-center" role="alert">
          <i className="bi bi-x-octagon-fill me-2"></i>
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="about-page">
      <div className="container py-5">
        <header className="text-center mb-5">
          <h1 className="display-4 fw-bold text-gradient mb-3">About SpaceX</h1>
          <p className="lead text-light opacity-75">
            Pioneering the Future of Space Exploration
          </p>
        </header>

        <div className="info-card mb-5">
          <div className="card-body">
            <h4 className="card-title text-accent mb-3">Project Disclaimer</h4>
            <p className="card-text">
              This project is not affiliated with or endorsed by SpaceX. It is a
              personal training project developed by Haeytham Almalak to explore
              REST APIs and modern web development technologies.
            </p>
          </div>
        </div>

        {companyInfo && (
          <div className="company-card">
            <div className="card-body">
              <div className="row g-4">
                <div className="col-12 col-lg-4 border-lg-end border-accent">
                  <div className="pe-lg-4">
                    <h3 className="text-accent mb-4">Key Metrics</h3>
                    <div className="metric-item">
                      <span className="metric-label">Founded</span>
                      <span className="metric-value">
                        {companyInfo.founded}
                      </span>
                    </div>
                    <div className="metric-item">
                      <span className="metric-label">Employees</span>
                      <span className="metric-value">
                        {new Intl.NumberFormat().format(companyInfo.employees)}
                      </span>
                    </div>
                    <div className="metric-item">
                      <span className="metric-label">Valuation</span>
                      <span className="metric-value">
                        ${new Intl.NumberFormat().format(companyInfo.valuation)}
                      </span>
                    </div>
                    <div className="metric-item">
                      <span className="metric-label">Launch Sites</span>
                      <span className="metric-value">
                        {companyInfo.launch_sites}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-4 border-lg-end border-accent">
                  <div className="px-lg-4">
                    <h3 className="text-accent mb-4">Leadership</h3>
                    <div className="leader-item">
                      <span className="leader-position">CEO</span>
                      <span className="leader-name">{companyInfo.ceo}</span>
                    </div>
                    <div className="leader-item">
                      <span className="leader-position">CTO</span>
                      <span className="leader-name">{companyInfo.cto}</span>
                    </div>
                    <div className="leader-item">
                      <span className="leader-position">COO</span>
                      <span className="leader-name">{companyInfo.coo}</span>
                    </div>
                    <div className="leader-item">
                      <span className="leader-position">CTO Propulsion</span>
                      <span className="leader-name">
                        {companyInfo.cto_propulsion}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-4">
                  <div className="ps-lg-4">
                    <h3 className="text-accent mb-4">Company Details</h3>
                    <div className="detail-item">
                      <span className="detail-label">Founder</span>
                      <span className="detail-value">
                        {companyInfo.founder}
                      </span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Headquarters</span>
                      <span className="detail-value">
                        {companyInfo.headquarters.address},{" "}
                        {companyInfo.headquarters.city},<br />
                        {companyInfo.headquarters.state}
                      </span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Vehicles</span>
                      <span className="detail-value">
                        {companyInfo.vehicles}
                      </span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Test Sites</span>
                      <span className="detail-value">
                        {companyInfo.test_sites}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-12">
                  <h3 className="text-accent mb-3">Mission Statement</h3>
                  <p className="company-summary">{companyInfo.summary}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
