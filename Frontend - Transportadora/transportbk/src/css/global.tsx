import { StyleSheet } from "react-native";
import { height, width } from "../screen/Login";

const styles = StyleSheet.create({
    container:{
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'black',
        padding:0,
        margin:0,
        width: width
},
    logoImage:{
        width:"100%",
        height:"100%"
    },
    containerImg:{
        width:"50%",
        height:100
    },
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
    item:{
        backgroundColor:"#009898", 
        marginTop:50, 
        width:200, 
        height:80, 
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        padding:10
    },
    button:{
        width:250,
        height:50,
        position:"relative",
        top:100,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#009898",
        borderRadius:7,
        flexDirection:"row"
        
        
    },
    containerInfo:{
        borderWidth:2, 
        borderBottomColor:"#009898",
        width:"95%", 
        position:"absolute",
        top:5, 
        padding:5,
        height:90, 
        flexDirection:"row",
        display:"flex", 
        alignItems:"center"
        
    },
    text:{
        color:"white",
        fontSize:20
    },
    input:{
        width:250,
        height:50,
        backgroundColor:"white",
        borderRadius:7,
        marginTop:35,
        padding:4
       
    },
    containerInput:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
       
       
    },
   


})

export default styles;