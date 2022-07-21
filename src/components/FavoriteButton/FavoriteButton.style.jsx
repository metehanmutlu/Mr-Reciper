import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: 36,
        height: 36,
        borderRadius: 18,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    containerCard: {
        position: 'absolute',
        right: 8,
        top: 8,
        zIndex: 2,
    }
})