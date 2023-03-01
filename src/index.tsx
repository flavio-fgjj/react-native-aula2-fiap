import React from 'react';
import {StatusBar} from 'react-native';

// Routes
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#be0e49'} />
      <Routes />
    </>
  );
}
