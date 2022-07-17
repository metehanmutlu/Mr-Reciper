import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Categories.style'
import useFetch from '../../hooks/useFetch'
import CategoryCard from '../../components/Cards/CategoryCard'
import Error from '../../components/Error'
import Loading from '../../components/Loading'

const Categories = ({ navigation }) => {
    const URL = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    const { data, loading, error } = useFetch(URL)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        setCategories(data.categories)
    }, [data])

    const renderItem = ({ item }) =>
        <CategoryCard
            category={item}
            onPress={() => {
                navigation.navigate('Meals', { categoryName: item.strCategory })
            }}
        />

    if (error) return <Error />

    if (loading) return <Loading />

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={renderItem}
                keyExtractor={(item) => item.idCategory}
            />
        </View>
    )
}

export default Categories