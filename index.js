import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './Context/AuthContext';
import { ThemeConTextProvider } from './Context/ThemeContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeConTextProvider>
      <AuthContextProvider>
          <App />
      </AuthContextProvider>
    </ThemeConTextProvider>
  </React.StrictMode>
);
