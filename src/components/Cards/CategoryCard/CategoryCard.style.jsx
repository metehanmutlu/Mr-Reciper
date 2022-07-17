import { StyleSheet } from "react-native";

const IMAGE_WIDTH = 320
const IMAGE_HEIGHT = 200
const RATE = 3

export default StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        margin: 6,
        padding: 5,
        paddingLeft: 6,
        borderRadius: 10,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderWidth: 4,
        borderColor: '#bcaaa4',
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: IMAGE_WIDTH / RATE,
        height: IMAGE_HEIGHT / RATE,
        // marginLeft: '5%',
        borderRadius: IMAGE_HEIGHT
        // borderTopLeftRadius: IMAGE_HEIGHT,
        // borderBottomLeftRadius: IMAGE_HEIGHT,
    },
    title: {
        color: 'black',
        marginLeft: 10,
        fontSize: 18,
    },
})