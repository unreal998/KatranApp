import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    imageContainer: {
        marginBottom: 10,
        backgroundColor: "#f3f1f1",
        display: "flex",
    },
    buttonContainer: {
        position: "absolute",
        marginTop: 110,
        width: 350,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    sliderCircle: {
        width: 15,
        height: 15,
        marginRight: 3,
        marginLeft: 3,
        borderRadius: 10,
        backgroundColor: "#2275c5"
    },
    sliderCircleSelected: {
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        borderColor: "#2275c5",
        borderWidth: 1
    }
});

