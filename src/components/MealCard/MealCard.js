import React from "react";
import { View, Text, Image, TouchableWithoutFeedback, ImageBackground } from "react-native";
import styles from './MealCard.style';

function MealCard( {products, onselect} ) {

    return(
        <TouchableWithoutFeedback onPress= {onselect}>
        <View style={styles.container}>
            <ImageBackground source={{uri: products.strMealThumb}} style={styles.image} imageStyle={{borderRadius: 10}}>
                <View  style={styles.box}>
              <Text style={styles.title}>{products.strMeal}</Text>
                </View>
              </ImageBackground>
        </View>
        </TouchableWithoutFeedback>
    )

}

export default MealCard;