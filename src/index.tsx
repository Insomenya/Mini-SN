import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routes from './components/routes/Routes';
import * as firebase from 'firebase/app'
import { AuthProvider } from './components/providers/AuthProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

firebase.initializeApp(
  {
    apiKey: "AIzaSyBvmRtJ6tNjorRquc8MrdKvh9EAT4WeVS4",
    authDomain: "mini-sn-657a0.firebaseapp.com",
    projectId: "mini-sn-657a0",
    storageBucket: "mini-sn-657a0.appspot.com",
    messagingSenderId: "402192165238",
    appId: "1:402192165238:web:2da76ed828b84c50697257"
  }
);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>
);
