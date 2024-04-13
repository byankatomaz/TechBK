import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    CardBag:{
        width:"100%",
        height:"20%",
        backgroundColor:"#252525",
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-start",
        padding:10,
        marginBottom:20,
        borderRadius:7,
        flexDirection:"row"
        
    },
    cards:{
        width:"100%",
        height:"50%",
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-start",
        gap:-50,
        
    },
    card:{
        width:"100%",
        height:"35%",
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-start",
        padding:10
    },

})

export default styles;