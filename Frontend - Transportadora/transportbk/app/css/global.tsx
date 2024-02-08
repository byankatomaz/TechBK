import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'black',
        padding:0,
        margin:0,
        width:'100%'
},
    logoImage:{
        width:"100%",
        height:"100%"
    },
    containerImg:{
        width:"50%",
        height:100
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