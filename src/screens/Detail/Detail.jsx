import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Detail.style'
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import FavoriteButton from '../../components/FavoriteButton'

const Detail = ({ navigation, route }) => {
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <FavoriteButton idMeal={route.params.idMeal} type='detail' />
            )
        })
    }, [])

    const idMeal = route.params.idMeal
    const URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
    const { data, loading, error } = useFetch(URL + idMeal)
    const [meal, setMeal] = useState({})

    useEffect(() => {
        (data.meals) && setMeal(data.meals[0])
    }, [data])

    const openUrl = async (url) => {
        const isSupported = await Linking.canOpenURL(url)
        if (isSupported) {
            await Linking.openURL(url)
        } else {
            console.log('It is a unsupported link!')
        }
    }

    if (error) return <Error />

    if (loading) return <Loading />

    return (
        <ScrollView style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: meal.strMealThumb }}
            />
            <View style={styles.header}>
                <Text style={styles.title}>{meal.strMeal}</Text>
                <Text style={styles.area}>{meal.strArea}</Text>
            </View>
            <View style={styles.divider} />
            <Text style={styles.instructions}>{meal.strInstructions}</Text>
            <TouchableOpacity
                style={styles.youtubeBtn}
                onPress={() => { openUrl(meal.strYoutube) }}
            >
                <Text style={styles.btnTitle}>Watch on Youtube</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Detail