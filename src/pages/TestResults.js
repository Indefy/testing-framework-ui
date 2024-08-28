import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestResults = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Directly request from the backend server running on localhost:5000
    axios.get('http://localhost:5000/api/tests')
      .then(response => {
        setResults(response.data);
      })
      .catch(error => {
        console.error('Error fetching test results:', error);
      });
  }, []);

  return (
    <div>
      <h2>Test Results</h2>
      <table>
        <thead>
          <tr>
            <th>Test Name</th>
            <th>Status</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {results.map(result => (
            <tr key={result.id}>
              <td>{result.name}</td>
              <td>{result.status}</td>
              <td>{result.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestResults;
