import React, { useEffect } from 'react';
import { healthAPI, rootAPI } from '../services/api';
import { useApi } from '../hooks/useApi';

const BackendStatus = () => {
  const { loading: healthLoading, error: healthError, data: healthData, execute: executeHealth } = useApi();
  const { loading: rootLoading, error: rootError, data: rootData, execute: executeRoot } = useApi();

  useEffect(() => {
    executeHealth(healthAPI.checkHealth);
    executeRoot(rootAPI.getInfo);
  }, [executeHealth, executeRoot]);

  const testConnection = () => {
    executeHealth(healthAPI.checkHealth);
    executeRoot(rootAPI.getInfo);
  };

  return (
    <section className="section">
      <h2>Backend Connection Status</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={testConnection}
          style={{ 
            background: '#28a745', 
            color: 'white', 
            border: 'none', 
            padding: '10px 20px', 
            borderRadius: '5px', 
            cursor: 'pointer' 
          }}
        >
          Test Connection
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* Health Check */}
        <div className="status-card">
          <h3>Health Check</h3>
          {healthLoading && <div className="loading">Checking...</div>}
          {healthError && <div className="error">Error: {healthError}</div>}
          {healthData && (
            <div className="success">
              <p><strong>Status:</strong> {healthData.status}</p>
              <p><strong>Timestamp:</strong> {healthData.timestamp}</p>
            </div>
          )}
        </div>

        {/* Root API Info */}
        <div className="status-card">
          <h3>API Information</h3>
          {rootLoading && <div className="loading">Loading...</div>}
          {rootError && <div className="error">Error: {rootError}</div>}
          {rootData && (
            <div className="success">
              <p><strong>Message:</strong> {rootData.message}</p>
              <p><strong>Version:</strong> {rootData.version}</p>
              <p><strong>Endpoints:</strong></p>
              <ul>
                {Object.entries(rootData.endpoints).map(([key, value]) => (
                  <li key={key}>{key}: {value}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BackendStatus;
