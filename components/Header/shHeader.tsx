import {StyleSheet} from "react-native";

export const style = StyleSheet.create({
    header:{
        backgroundColor: "#1e5799",
        display: "flex",
        flexDirection: "row",
        height: 50,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-around"
    },
    searchContainer: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "space-around",
        borderRadius: 5,
        width: 250
    },
    searchHolder: {
        width: 220
    }
});

