import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import styles from './CategoryCard.style';

function CategoryCard({category, onselect}) {
    return(
        <TouchableWithoutFeedback onPress={onselect}>
        <View style={styles.container}>
            <View style={styles.box}>
            <Image source={{uri: category.strCategoryThumb}} style={styles.image} />
            <View style= {styles.body_container}>
            <Text style={styles.title}> {category.strCategory} </Text>
            </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )

}

export default CategoryCard;