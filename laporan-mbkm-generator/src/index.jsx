import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./components/App";
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');

createRoot(root).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);