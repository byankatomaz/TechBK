import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.96)',
    },
    modalContent: {
        backgroundColor: '#252525',
        padding: 20,
        display:"flex",
        justifyContent:"center",
        borderTopEndRadius: 67,
        borderTopStartRadius:67,
        width: '100%',
        height:'30%',
        maxHeight: '60%',
        alignItems: 'center',
    },


});