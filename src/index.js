import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesContextProvider } from './store/Favorites-Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoritesContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </FavoritesContextProvider>
);
