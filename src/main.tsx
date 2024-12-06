import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import App from './App.tsx';
import './index.css';

const root = document.getElementById('root')!;

// Enable concurrent features
createRoot(root).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>
);
