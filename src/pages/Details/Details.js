import React, { useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import Config from "react-native-config";
import DetailCard from "../../components/DetailCard";
import useFetch from "../../hook/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";


const Details = ({route}) => {
const {id} = route.params

const {loading, data, error} = useFetch(`${Config.API_MEALID}${id}`)

const renderDetail = ({item}) =>  <DetailCard food={item} />

if(loading){
  return <Loading />;
}
if(error){
  return <Error />;
}

  return(

    <FlatList data={data.meals} renderItem={renderDetail} />
   )

}

export default Details;