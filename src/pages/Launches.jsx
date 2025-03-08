import axios from "axios";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useEffect, useState } from "react";
import "./Launches.css";

const FALLBACK_IMAGE = `data:image/svg+xml;base64,${btoa(`
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#1a1a1a"/>
  <path d="M100 60L40 120H80L100 100L120 120H160L100 60Z" fill="#2a2a2a"/>
  <path d="M140 140L160 160H180V180H160L140 160V140Z" fill="#ff6b42"/>
  <circle cx="100" cy="80" r="8" fill="#ff6b42"/>
  <text x="50%" y="160" dominant-baseline="middle" text-anchor="middle" fill="#ff6b42" font-family="Arial" font-size="14">
    IMAGE NOT AVAILABLE
  </text>
</svg>
`)}`;

const Launches = () => {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        const { data } = await axios.get(
          "https://api.spacexdata.com/v4/launches"
        );
        const now = new Date();

        const processedLaunches = data
          .map((launch) => ({
            ...launch,
            actualStatus: launch.upcoming
              ? new Date(launch.date_utc) > now
                ? "upcoming"
                : "unknown"
              : launch.success
              ? "success"
              : "failed"
          }))
          .sort((a, b) => new Date(b.date_utc) - new Date(a.date_utc));

        setLaunches(processedLaunches);
      } catch (error) {
        console.error("Error fetching launches:", error);
        setError("Failed to load launches. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchLaunches();
  }, []);

  return (
    <div className="launches">
      <div className="container py-5">
        <header className="text-center mb-5">
          <h1 className="display-4 fw-bold text-uppercase mb-3">
            SpaceX Launch Manifest
          </h1>
          <p className="lead text-light">
            Comprehensive overview of all SpaceX orbital missions
          </p>
        </header>

        {loading && (
          <p className="text-center text-light">Loading launches...</p>
        )}
        {error && <p className="text-center text-danger">{error}</p>}

        {!loading && !error && (
          <div className="row g-4">
            {launches.map((launch) => {
              const launchDate = new Date(launch.date_utc);
              const isPast = launchDate < new Date();

              return (
                <div key={launch.id} className="col-12 col-md-6 col-lg-4">
                  <div className="launch-card h-100 p-4 rounded-3">
                    <div className="d-flex flex-column h-100">
                      <div className="text-center mb-3">
                        <img
                          src={launch.links.patch?.small || FALLBACK_IMAGE}
                          alt={`${launch.name} mission patch`}
                          className="mission-patch img-fluid"
                          onError={(e) => {
                            e.target.src = FALLBACK_IMAGE;
                          }}
                        />
                      </div>

                      <h2 className="h5 fw-bold mb-3 text-light">
                        {launch.name}
                      </h2>
                      <div className="mb-3">
                        <span
                          className={`badge ${
                            launch.actualStatus === "upcoming"
                              ? "bg-warning text-dark"
                              : launch.actualStatus === "success"
                              ? "bg-success"
                              : launch.actualStatus === "failed"
                              ? "bg-danger"
                              : "bg-secondary"
                          }`}
                        >
                          {launch.actualStatus === "upcoming" && "Upcoming"}
                          {launch.actualStatus === "success" && "Successful"}
                          {launch.actualStatus === "failed" && "Failed"}
                          {launch.actualStatus === "unknown" &&
                            "Unknown Status"}
                        </span>
                      </div>

                      <div className="mt-auto">
                        <p className="text-muted small mb-2">
                          {launchDate.toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                          })}
                          {isPast && ` at ${launchDate.toLocaleTimeString()}`}
                        </p>
                        <button
                          className="btn btn-outline-light w-100"
                          onClick={() =>
                            window.open(launch.links.webcast, "_blank")
                          }
                          disabled={!launch.links.webcast}
                        >
                          {launch.links.webcast
                            ? "Watch Mission →"
                            : "No Video Available"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
       
      </div>
    </div>
  );
};

export default Launches;
