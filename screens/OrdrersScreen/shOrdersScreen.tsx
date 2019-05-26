import {StyleSheet} from "react-native";

export const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#f3f3f4",
    },
    globInfo: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignContent: "center"
    },
    table: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#989898",
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowRadius: 10,
        shadowColor: "#000000",
        borderLeftWidth: 0,
        borderRightWidth: 0,
        marginTop: 2,
        marginBottom: 2,
        backgroundColor: "#ffffff",

    },
    tableItems: {
        padding: 5,
        fontSize: 16,
    },
    priseText: {
        padding: 5,
        fontSize: 16,
        fontWeight: "bold"

    },
    tableGlobalInfo: {
        padding: 5,
        fontSize: 16,
        color: "#989898"
    }
});

