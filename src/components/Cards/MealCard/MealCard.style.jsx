import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        margin: 10,
        position: 'relative',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'right',
    },
    titleBg: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '100%',
        // maxHeight: 55,
        backgroundColor: '#00000095',
        padding: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    image: {
        height: 155,
        // maxHeight: 100,
        resizeMode: 'cover',
        backgroundColor: 'white',
        borderRadius: 10,
    },
})