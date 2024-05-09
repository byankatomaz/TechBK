import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flex: 1,
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
    containerImage: {
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
        width: 185,
        borderRadius: 5,
        display: "flex",
        height: 390,
        justifyContent: "center",
        alignItems: "center",
    },
    itemIcon: {
        width: "100%", 
        padding: 2, 
        display: "flex", 
        alignItems: "flex-end", 
        justifyContent: "center"
    },
    confirm:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        position:"relative",
        marginTop:45,
   
    
    },
    cameraOuGalery:{
        display:"flex",
        flexDirection:"row",
        width: 100, 
        height: 100,
       justifyContent:"space-between",
       marginTop:50,
    },
    modal:{
        backgroundColor:'#252525',
        alignItems:'center',
        display:'flex',
        justifyContent:'center'
    },
})

export default styles;