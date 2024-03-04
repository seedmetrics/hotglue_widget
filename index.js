import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HotglueConfig from '@hotglue/widget';

ReactDOM.render(
  <HotglueConfig
    config={{
      apiKey: 'cbNmuUxqyM6YRaBK6Jn326bJFFbdLYxK75FgCLpS',
      envId: 'main.hotglue.seedmetrics.com'
    }}
  >
    <App />
  </HotglueConfig>,
  document.getElementById('root')
);