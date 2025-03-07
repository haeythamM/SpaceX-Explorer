import React from "react";
// import { useState, useEffect } from 'react';
// import axios from 'axios';

const Launches = () => {
  const [Launches, setLaunches] = useState([]);
  useEffect(() => {
    console.log("Launches component mounted");
    axios.get('https://api.spacexdata.com/v4/launches/past').then((Response) => {
        console.log("Response");
    });
  });
  return (
    <div>
      <p>Launches Page</p>
    </div>
  );
};
export default Launches;
