import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import 'tailwindcss/tailwind.css'; 

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
    <App />
);