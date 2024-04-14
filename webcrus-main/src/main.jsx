import React from 'react';
import { createRoot } from 'react-dom/client'; // Corrected import
import App from './App.jsx';
import { AppProvider } from './context/AppProvider'; 

// Use createRoot if available, fallback to ReactDOM.render
const rootElement = document.getElementById('root');
const root = createRoot ? createRoot(rootElement) : ReactDOM;

root.render(
    <AppProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </AppProvider>
);
