import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Meals.style'
import useFetch from '../../hooks/useFetch'
import MealCard from '../../components/Cards/MealCard'
import Error from '../../components/Error'
import Loading from '../../components/Loading'

const Meals = ({ navigation, route }) => {
    const categoryName = route.params.categoryName
    const URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='
    const { data, loading, error } = useFetch(URL + categoryName)
    const [meals, setMeals] = useState([])

    useEffect(() => {
        setMeals(data.meals)
    }, [data])

    const renderItem = ({ item }) =>
        <MealCard
            meal={item}
            onPress={() => {
                navigation.navigate('Detail', { idMeal: item.idMeal })
            }}
        />

    if (error) return <Error />

    if (loading) return <Loading />

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

export default Meals