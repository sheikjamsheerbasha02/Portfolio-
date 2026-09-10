import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ErrorBoundary from './components/common/ErrorBoundary';
import App from './App.jsx';
import './index.css';
import './portfolio-refinement.css';
import './portfolio-final-polish.css';
import './portfolio-nav-static.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
