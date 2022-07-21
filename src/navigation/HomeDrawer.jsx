import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favorites from '../screens/Favorites';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Categories from '../screens/Categories';

const Drawer = createDrawerNavigator()

const HomeDrawer = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: '#ffa500'
                },
                headerTintColor: '#ffa500',
                drawerActiveTintColor: '#ffa500',
                drawerLabelStyle: {
                    marginLeft: -20
                }
            }}

        >
            <Drawer.Screen
                name='Categories'
                component={Categories}
                options={{
                    headerTitle: 'Mr. Reciper',
                    drawerIcon: ({ color, size, focused }) => {
                        return (<Ionicons
                            color={focused ? '#ffa500' : color}
                            size={size}
                            name={'list'}
                        />
                        )
                    }
                }}
            />
            <Drawer.Screen
                name='Favorites'
                component={Favorites}
                options={{
                    drawerLabel: 'Favorite Meals',
                    drawerIcon: ({ color, size, focused }) =>
                        <MaterialIcons
                            color={focused ? '#ffa500' : color}
                            size={size}
                            name={'favorite'}
                        />
                }}
            />
        </Drawer.Navigator>
    )
}

export default HomeDrawer
