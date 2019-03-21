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
    roomName: {
      color: "#ffffff",
      fontSize: 22
    },
    searchContainer: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "space-around",
        borderRadius: 5,
        width: 180
    },
    searchHolder: {
        width: 150
    }
});

