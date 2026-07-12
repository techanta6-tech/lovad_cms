import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { SocketProvider } from './context/SocketContext.tsx';
import { AppProvider } from './context/AppContext.tsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SocketProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </SocketProvider>
    </BrowserRouter>
  </StrictMode>,
);
