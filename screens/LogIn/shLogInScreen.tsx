import {StyleSheet} from "react-native";

export const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#81b5d1",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center"
    },
    logInForm: {
        width: 200,
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center"
        // backgroundColor: "#0a5a77",
    },
    bgImage: {
      width: 200,
      height: 200
    },
    authButtons: {
        margin: 10,
    },
    textInput: {
        margin: 10,
        borderColor: "#6996b1",
        borderWidth: 2,
        borderRadius: 3,
        paddingLeft: 8,
        backgroundColor: "#81b5d1",
    }
});

