import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase, { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './firebase/firebaseConfig';


 firebase.initializeApp(firebaseConfig);
 export const app = initializeApp(firebaseConfig);
//  const analytics = getAnlytics(app);

export const sowmya = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
sowmya.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);





reportWebVitals();
