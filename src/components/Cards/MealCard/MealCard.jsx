import { View, Text, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './MealCard.style'
import FavoriteButton from '../../FavoriteButton'

const MealCard = ({ meal, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <FavoriteButton idMeal={meal.idMeal} type='card' />
                <Image
                    source={{ uri: meal.strMealThumb }}
                    style={styles.image}
                />
                <View style={styles.titleBg}>
                    <Text style={styles.title}>
                        {((meal.strMeal).length > 26) ?
                            (((meal.strMeal).substring(0, 25 - 3)) + '...') :
                            meal.strMeal}
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default React.memo(MealCard)