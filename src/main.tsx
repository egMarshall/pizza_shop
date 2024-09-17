import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import { enableMocks } from '@/api/mocks';

enableMocks().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
