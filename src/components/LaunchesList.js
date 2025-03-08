import axios from "axios";
import React, { useEffect, useState } from "react";

const LaunchesList = () => {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("LaunchesList component mounted");

    const fetchLaunches = async () => {
      try {
        const response = await axios.get(
          "https://api.spacexdata.com/v4/launches/past"
        );
        console.log(response.data);
        setLaunches(response.data);
      } catch (error) {
        console.error("Error fetching launches:", error);
        setError("Failed to fetch launches. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchLaunches();
  }, []);

  return (
    <div>
      <h2>Past Launches</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <ul>
          {launches.map((launch) => (
            <li key={launch.id}>{launch.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LaunchesList;
