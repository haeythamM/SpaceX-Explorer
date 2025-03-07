import React, { useEffect, useState } from 'react';
import "./Launches.css";

const Launches = () => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    fetch('https://api.spacexdata.com/v4/launches')
      .then(response => response.json())
      .then(data => setLaunches(data));
  }, []);

  return (
    <div className="launches">
      <div className="container mt-4">
        <div className="p-5 bg-secondary text-white rounded">
          <h1>Launches Page</h1>
          <p className="lead">
            Here you can find details about the latest launches.
          </p>
        </div>
        <ul>
          {launches.map(launch => (
            <li key={launch.id}>
              <h2>{launch.name}</h2>
              <p>{launch.date_utc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Launches;
