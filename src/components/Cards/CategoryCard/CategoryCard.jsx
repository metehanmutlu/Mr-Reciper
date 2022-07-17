import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './CategoryCard.style'
import useFetch from '../../../hooks/useFetch'

const CategoryCard = ({ category, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container} >
                <Image
                    style={styles.image}
                    source={{ uri: category.strCategoryThumb }}
                />
                <Text style={styles.title}>{category.strCategory}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoryCard