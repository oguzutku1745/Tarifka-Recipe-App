import { Link } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, Linking, TouchableOpacity } from "react-native";
import styles from './DetailCard.style';

function DetailCard({food}) {

    const gotoURL = () => {
        const url = food.strYoutube
        Linking.openURL(url);
    }

    return(
        <View style= {styles.container}>
            <Image source={{uri: food.strMealThumb}} style={styles.image} />
            <Text style={styles.title}>{food.strMeal}</Text>
            <Text style={styles.home}>{food.strArea}</Text>
            <View style={styles.line} />
            <Text style={styles.text}>{food.strInstructions}</Text>
            <TouchableOpacity style={styles.redbutton} onPress= {gotoURL} ><Text style={styles.container_text}>Watch on Youtube</Text></TouchableOpacity>

        </View>
    )

}

export default DetailCard;