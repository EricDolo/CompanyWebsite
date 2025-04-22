import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/index.css'

if (window.location.hostname === 'dolodynamicsolutions.com') {
    window.location.href = 'https://www.dolodynamicsolutions.com/';
  }

createRoot(document.getElementById("root")!).render(<App />);
