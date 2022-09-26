import React from "react";
import { FlatList, View, Text } from "react-native";
import Config from "react-native-config";
import CategoryCard from "../../components/CategoryCard";
import useFetch from "../../hook/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error"


const Categories = ({navigation}) => {

    const {loading, data, error} = useFetch(Config.API_CATEGORIES);

    const handleCategorySelect = category => {
        navigation.navigate('Meals', {category});
    }

    const renderHandler = ({item}) => 
        <CategoryCard category={item} onselect={() => {handleCategorySelect(item.strCategory)}} />

    if(loading){
        return <Loading />;
    }
    if(error){
        return <Error />;
    }

    return(
        <FlatList data={data.categories} renderItem={renderHandler} />
    )

    }

export default Categories;