import { createRoot } from 'react-dom/client';
import App from './App.js';

setTimeout(() => {
  console.log('createRoot', createRoot)
  console.log('document.getElementById(\'root\')', document.getElementById('root'))
  const root = createRoot(document.getElementById('root'));
  console.log('App', App)
  root.render(<App />);
}, 100)
