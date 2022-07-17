import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    image: {
        height: 320
    },
    header: {
        padding: 8
    },
    title: {
        color: '#a52a2a',
        fontSize: 30,
        fontWeight: 'bold',
    },
    area: {
        color: '#a52a2a',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    divider: {
        borderTopWidth: 2,
        borderColor: '#bdbdbd',
    },
    instructions: {
        color: 'black',
        fontSize: 18,
        padding: 10,
        // fontWeight: 'bold'
    },
    youtubeBtn: {
        backgroundColor: '#ff0000',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        padding: 5,
        borderRadius: 6
    },
    btnTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500'
    }
})