import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardDetails:{
        width:"100%",
        height:80,
        backgroundColor:"#252525",
        display:"flex",
        alignItems:"center",
        padding:10,
        marginBottom:20,
        borderRadius:7,
        
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