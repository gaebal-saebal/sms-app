import React from 'react';
import ReactDOM from 'react-dom/client';
import './firebase/firebase'; // initialize Firebase before render App component
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
