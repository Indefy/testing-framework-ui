import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Settings = () => {
  const [apiKey, setApiKey] = useState('');
  const [environment, setEnvironment] = useState('');

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    console.log('API URL:', apiUrl);

    axios.get(`${apiUrl}/api/settings`)
      .then(response => {
        setApiKey(response.data.apiKey);
        setEnvironment(response.data.environment);
      })
      .catch(error => console.error('Error fetching settings:', error));
  }, []);

  const handleSave = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    axios.post(`${apiUrl}/api/settings`, { apiKey, environment })
      .then(response => console.log(response.data))
      .catch(error => console.error('Error saving settings:', error));
  };

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <label>API Key:</label>
        <input type="text" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
      </div>
      <div>
        <label>Environment:</label>
        <select value={environment} onChange={(e) => setEnvironment(e.target.value)}>
          <option value="development">Development</option>
          <option value="production">Production</option>
        </select>
      </div>
      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
};

export default Settings;