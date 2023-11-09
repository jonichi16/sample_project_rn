import React from 'react';
import AppNavigation from './src/navigations/AppNavigation';
import AuthProvider from './src/authentication/context/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
};

export default App;
