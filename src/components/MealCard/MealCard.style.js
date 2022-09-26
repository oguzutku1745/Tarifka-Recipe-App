import { StyleSheet, Dimensions } from "react-native";

 const dimensionSize = Dimensions.get('window');

export default StyleSheet.create({
    container:{
        backgroundColor: '#fc991d',
        padding:10,
        flex:1
    },
    image: {
        height: dimensionSize.height /4,
        width: dimensionSize.width -20 ,
        justifyContent: 'flex-end',
        resizeMode: 'contain',
        flex:1,
    },
    box:{
        borderRadius: 10,
        backgroundColor: '#21212160',
        flex:0.2

    },
    title:{
        marginRight: 5,
        padding: 2,
        color: 'white',
        textAlign: 'right',
        fontWeight : '900',
        fontSize: 30,

        
    }
})
