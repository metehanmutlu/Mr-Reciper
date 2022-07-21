import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoritesContext = createContext()

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('favorites')
            if (value !== null) {
                setFavorites(JSON.parse(value))
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const values = {
        favorites,
        setFavorites
    }

    return (
        <FavoritesContext.Provider value={values}>
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavorites = () => useContext(FavoritesContext)