import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useFavorites } from '../../context/FavoritesContext'
import styles from './FavoriteButton.style'
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoriteButton = ({ idMeal, type }) => {
    const { favorites, setFavorites } = useFavorites()

    const handleOnPress = () => {
        const addFavorite = async () => {
            const newFavorites = [...favorites, { id: idMeal }]
            setFavorites(newFavorites)
            await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites))
        }
        const removeFavorite = async () => {
            const newFavorites = favorites.filter((fav) => fav.id !== idMeal)
            setFavorites(newFavorites)
            await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites))
        }

        const isExist = favorites.filter((fav) => fav.id === idMeal)
        isExist?.length
            ? removeFavorite()
            : addFavorite()
    }

    const iconProps = () => {
        const isFavorite = favorites.filter((fav) => fav.id === idMeal)
        const props = isFavorite?.length
            ? { name: 'favorite', color: '#ffa500', size: 23 }
            : { name: 'favorite-outline', color: 'black', size: 23 }

        return props
    }

    return (
        <View
            style={[styles.container, type === 'card' && styles.containerCard]}
        >
            <TouchableWithoutFeedback
                onPress={handleOnPress}
            // style={{ width: '100%', height: '100%'}}
            >
                <MaterialIcons
                    {...iconProps()}
                />
            </TouchableWithoutFeedback>
        </View>
    )
}

export default React.memo(FavoriteButton)