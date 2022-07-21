import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FavoritesProvider } from './context/FavoritesContext';
import AppStack from './navigation/AppStack';

const App = () => {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </FavoritesProvider>
  )
}

export default App