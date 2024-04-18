import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    CardBag: {
        width: "100%",
        minHeight: "76%",
        height:"auto",
        backgroundColor: "#252525",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 4,
        borderRadius: 7,
        flexDirection: "row",
        gap: 10

    },
    cards: {
        width: "100%",
        height: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: -50,

    },
    card: {
        width: "100%",
        height: "25%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 10,
        borderRadius: 12,
        borderColor: "#009898",
        borderWidth: 2
    },
    moreOrLess: {
        display: "flex",
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "space-between",
        width: 85,
        height:35,
        borderRadius: 6,
        padding: 4,
        backgroundColor: "gray",
       
    },
    textAmount:{
        fontSize:15,
        color:"white"
    }

})

export default styles;