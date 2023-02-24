import React from 'react';
import {StatusBar} from 'react-native';

// Routes
import Router from './routes';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#ed145b'} />
      <Router />
    </>
  );
}
