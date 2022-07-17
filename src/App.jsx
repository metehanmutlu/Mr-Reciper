import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './screens/Categories';
import Meals from './screens/Meals';
import DetailStyle from './screens/Detail';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#ffa500'
          },
          headerTintColor: '#ffa500'
        }}
      >
        <Stack.Screen
          name='Categories'
          component={Categories}
          options={{ headerTitle: 'Mr. Reciper' }}
        />
        <Stack.Screen
          name='Meals'
          component={Meals}
        />
        <Stack.Screen
          name='Detail'
          component={DetailStyle}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App