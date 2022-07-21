import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Favorites.style'
import { useFavorites } from '../../context/FavoritesContext'
import useFetchAllFavorites from '../../hooks/useFetchAllFavorites'
import Loading from '../../components/Loading'
import MealCard from '../../components/Cards/MealCard'
import axios from "axios"

const Favorites = ({ navigation }) => {
    const { favorites } = useFavorites()
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
                let datas = [];
                for (const fav of favorites) {
                    const response = await axios.get(URL + `${fav.id}`)
                    if (response.data.meals) {
                        datas.push(...response.data.meals)
                    }
                }
                setLoading(false)
                setMeals(datas)
            } catch (error) {
                console.log(error);
                setError(error.message)
                setLoading(false)
            }
        }
        fetchData()
    }, [favorites])


    const renderItem = ({ item }) =>
        <MealCard
            meal={item}
            onPress={() => {
                navigation.navigate('Detail', { idMeal: item.idMeal })
            }}
        />

    if (loading) return <Loading />

    if (error) return <Error />

    return (
        <View style={styles.container}>
            <FlatList
                data={meals}
                renderItem={renderItem}
                keyExtractor={(item) => item.idMeal}
            />
        </View>
    )
}

export default Favorites