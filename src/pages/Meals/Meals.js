import React from "react";
import { View, Text, FlatList } from "react-native";
import Config from "react-native-config";
import MealCard from "../../components/MealCard";
import useFetch from "../../hook/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Meals = ({navigation, route}) => {
const {category} = route.params
const {data, loading, error} = useFetch(`${Config.API_CATEGORY_CHOSEN}${category}`)

function handleDetails(id) { navigation.navigate('Details', {id})};

const renderMeals = ({item}) =>  <MealCard products={item} onselect= { () => handleDetails(item.idMeal) } /> 


if(loading){
    return <Loading />;
}
if(error){
    return <Error />;
}
    return(
        <View>
        <FlatList data={data.meals} renderItem={renderMeals} />
        </View>
    )


}

export default Meals;