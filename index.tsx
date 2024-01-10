import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './firebase/firebaseConfig';


firebase.initializeApp(firebaseConfig);

const sowmya = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
sowmya.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);





reportWebVitals();
