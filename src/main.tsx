
import { createRoot } from 'react-dom/client';
import AccessibilityBar from './components/AccessibilityBar';
import App from './App.tsx';
import DarkModeToggle from './components/DarkModeToggle';
import './index.css';
import './styles/high-contrast.css';
import './styles/dark-mode.css';

createRoot(document.getElementById("root")!).render(
  <>
    <AccessibilityBar />
    <DarkModeToggle />
    <App />
  </>
);
