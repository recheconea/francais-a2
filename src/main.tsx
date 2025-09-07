import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './styles.css';
import Home from './pages/Home';
import PasseCompose from './pages/PasseCompose';
import ImparfaitVsPasseCompose from './pages/ImparfaitVsPasseCompose';
import FuturSimple from './pages/FuturSimple';
import PronomsComplements from './pages/PronomsComplements';
import PronomY from './pages/PronomY';
import PronomEn from './pages/PronomEn';
import PronomsRelatifs from './pages/PronomsRelatifs';
import TopicGeneric from './pages/TopicGeneric';

// Normalize Vite base (remove trailing slash) for React Router basename
const basename = (import.meta as any).env?.BASE_URL
  ? (import.meta as any).env.BASE_URL.replace(/\/+$|^$/, '')
  : '/';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'passe-compose', element: <PasseCompose /> },
      { path: 'imparfait-vs-pc', element: <ImparfaitVsPasseCompose /> },
      { path: 'futur-simple', element: <FuturSimple /> },
      { path: 'pronoms-complements', element: <PronomsComplements /> },
      { path: 'pronom-y', element: <PronomY /> },
      { path: 'pronom-en', element: <PronomEn /> },
      { path: 'pronoms-relatifs', element: <PronomsRelatifs /> },
      // Generic fallback for additional topics listed in topics.json
      { path: '*', element: <TopicGeneric /> },
    ],
  },
], {
  // Match the app's subpath on GitHub Pages
  basename,
});

const root = createRoot(document.getElementById('root')!);
root.render(<RouterProvider router={router} />);
