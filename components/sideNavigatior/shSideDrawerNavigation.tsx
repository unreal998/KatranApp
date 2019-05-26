import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userNameText: {
      fontSize: 15,
      fontWeight: "bold",
      color: "#1d1d1d"
    },
    head : {
      display: "flex",
      flexDirection :"row",
      alignContent: "center",
      alignItems: "center",
      marginTop: 5
    },
    navItemStyle: {
        padding: 10
    },
    navSectionStyle: {
        backgroundColor: 'lightgrey'
    },
    sectionHeadingStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    footerContainer: {
        padding: 20,
        backgroundColor: 'lightgrey'
    }
});
export default styles;