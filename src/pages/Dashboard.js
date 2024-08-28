// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch or load data here
    fetchData();
  }, []);

  const fetchData = () => {
    // Your logic to fetch data
    setData([/* Some mock data */]);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
