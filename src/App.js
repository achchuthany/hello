import React from 'react';
import AppRouter from './routes/AppRouter';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAv3zDc5UWdiamzFwfuJce7d2zRGa-cD_A',
  authDomain: 'myprofile-a71db.firebaseapp.com',
  projectId: 'myprofile-a71db',
  storageBucket: 'myprofile-a71db.appspot.com',
  messagingSenderId: '337167853370',
  appId: '1:337167853370:web:3f72ad92d320e90a5d5203',
  measurementId: 'G-LNB94FSD2G',
};

const App = () => {
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
  return <AppRouter />;
};

export default App;
