import { StyleSheet, Dimensions } from "react-native";

const dimensionSize = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#fc991d'
    },
    image: {
        alignItems: 'baseline',
        height: 70,
        width: 70,
        marginLeft: 5,
        resizeMode: 'contain'
    },
    box: {
        backgroundColor: '#e0e0e0',
        marginLeft: 10,
        marginRight: 10,
        flex:1,
        marginBottom: 10,
        marginTop: 10,
        flexDirection:'row',
        borderTopLeftRadius: 45,
        borderBottomLeftRadius: 45,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        overflow: 'hidden'
    },
    body_container: {
        justifyContent: 'center'
    },
    title:{
        marginLeft: 20,
        color: 'black',
        fontSize: 20,
        
    }
})