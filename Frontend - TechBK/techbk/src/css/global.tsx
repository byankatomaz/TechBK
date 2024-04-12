import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        padding: 0,
        margin: 0,
        width: "100%"
    },
    image: {
        width: "100%",
        height: "100%"
    },
    containerImg: {
        width: "100%",
        height: 170,
        bottom: 30
    },
    text: {
        color: "white",
        fontSize: 20
    },
    item: {
        backgroundColor: "#252525",
        width: 180,
        display:"flex",
        height: 250,
        justifyContent: "flex-start",
        alignItems: "center",
    },
})

export default styles;