import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import './index.css';
import reportWebVitals from './reportWebVitals';

Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* ✅ MUST WRAP <App> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
