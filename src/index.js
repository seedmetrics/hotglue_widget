import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HotglueConfig from '@hotglue/widget';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HotglueConfig
      config={{
        apiKey: window.publicApiKey,
        envId: window.envId
      }}
    >
      <App />
    </HotglueConfig>
);