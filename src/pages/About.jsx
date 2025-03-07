import React, { useEffect, useState } from "react";

const About = () => {
  const [companyInfo, setCompanyInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.spacexdata.com/v4/company")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch company info");
        }
        return response.json();
      })
      .then((data) => {
        setCompanyInfo(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container mt-4 p-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4 p-5">
        <div className="alert alert-danger" role="alert">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4 p-5">
      <h1>About this app</h1>
      <div className="alert alert-info" role="alert">
        <h4 className="alert-heading">Disclaimer</h4>
        <p>
          This project is not affiliated with SpaceX. It is a personal training
          project by Haeytham Almalak to explore REST APIs.
        </p>
      </div>
      {companyInfo && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">About SpaceX</h5>
            <dl className="row">
              <dt className="col-sm-3">Name</dt>
              <dd className="col-sm-9">{companyInfo.name}</dd>
              <dt className="col-sm-3">Founder</dt>
              <dd className="col-sm-9">{companyInfo.founder}</dd>
              <dt className="col-sm-3">Founded</dt>
              <dd className="col-sm-9">{companyInfo.founded}</dd>
              <dt className="col-sm-3">Employees</dt>
              <dd className="col-sm-9">{companyInfo.employees}</dd>
              <dt className="col-sm-3">Vehicles</dt>
              <dd className="col-sm-9">{companyInfo.vehicles}</dd>
              <dt className="col-sm-3">Launch Sites</dt>
              <dd className="col-sm-9">{companyInfo.launch_sites}</dd>
              <dt className="col-sm-3">Test Sites</dt>
              <dd className="col-sm-9">{companyInfo.test_sites}</dd>
              <dt className="col-sm-3">CEO</dt>
              <dd className="col-sm-9">{companyInfo.ceo}</dd>
              <dt className="col-sm-3">CTO</dt>
              <dd className="col-sm-9">{companyInfo.cto}</dd>
              <dt className="col-sm-3">COO</dt>
              <dd className="col-sm-9">{companyInfo.coo}</dd>
              <dt className="col-sm-3">CTO of Propulsion</dt>
              <dd className="col-sm-9">{companyInfo.cto_propulsion}</dd>
              <dt className="col-sm-3">Valuation</dt>
              <dd className="col-sm-9">
                {new Intl.NumberFormat("en-US").format(companyInfo.valuation)}
              </dd>
            </dl>
            <h6>Summary</h6>
            <p>{companyInfo.summary}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
