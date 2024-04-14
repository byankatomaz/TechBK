import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    CardBag:{
        width:"100%",
        height:"70%",
        backgroundColor:"#252525",
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-start",
        padding:10,
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
        height:"25%",
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-start",
        padding:10,
        borderRadius:12,
        borderColor:"#009898",
        borderWidth:2
    },

})

export default styles;