import { StyleSheet,Dimensions } from "react-native";

const dimensionSize = Dimensions.get('window')

export default StyleSheet.create({
    container:{

    },
    image: {
        width: dimensionSize.width,
        height: dimensionSize.height /3,
    },
    title:{
        marginTop:2,
        marginHorizontal: 5,
        color: '#c62828',
        fontWeight: 'bold',
        fontSize: 25,
    },
    home:{
        marginBottom: 2,
        marginHorizontal: 5,
        color:'#c62828',
        fontSize: 20,
        fontWeight: 'bold',
    },
    line: {
            borderBottomColor: '#bdbdbd',
            borderBottomWidth: 1,
    },
    text:{
        color:'black',
        fontSize: 14,
        padding:2,
    },
    redbutton:{
        margin: 10,
        padding: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        borderRadius: 10,
    },
    container_text:{
        color: 'white',
        fontWeight: 'bold',
    },

})