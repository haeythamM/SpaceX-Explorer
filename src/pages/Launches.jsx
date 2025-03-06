import React from "react";
import "./Launches.css";
import Launches from './components/Launches';

const Launches = () => {
  return (
    <div className="launches">
      <div className="container mt-4">
        <div className="p-5 bg-secondary text-white rounded">
          <h1>Launches Page</h1>
          <p className="lead">
            Here you can find details about the latest launches.
          </p>
        </div>
        <Launches />
      </div>
    </div>
  );
};

export default Launches;
