
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import DarkModeToggle from './components/DarkModeToggle';
import FloatingPhoneButton from './components/FloatingPhoneButton';
import AccessibilityBar from './components/AccessibilityBar';
import './index.css';
import './styles/high-contrast.css';
import './styles/dark-mode.css';

createRoot(document.getElementById("root")!).render(
  <>
    <AccessibilityBar />
    <DarkModeToggle />
    <FloatingPhoneButton />
    <App />
  </>
);
