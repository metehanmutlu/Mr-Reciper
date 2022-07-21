import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button } from 'react-native';
import Detail from '../screens/Detail';
import Meals from '../screens/Meals';
import HomeDrawer from './HomeDrawer';

const Stack = createNativeStackNavigator()

const AppStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: '#ffa500'
                },
                headerTintColor: '#ffa500',
                navigationBarColor: 'transparent',
            }}
        >
            <Stack.Screen
                name='Home'
                component={HomeDrawer}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Meals'
                component={Meals}
            />
            <Stack.Screen
                name='Detail'
                component={Detail}
            />
        </Stack.Navigator>
    )
}

export default AppStack