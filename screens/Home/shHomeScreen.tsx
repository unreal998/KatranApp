import {StyleSheet} from "react-native";

export const style = StyleSheet.create({
   container:{
       display: "flex",
       flexDirection: "row",
       flexWrap: "wrap",
    },
    scrollView: {
        margin: 5,
        backgroundColor: "#f3f1f1",
    },
    goodName: {
        fontSize: 12
    },
    goodContainer: {
       display: "flex",
       flexDirection: "column",
       alignItems: "center",
       justifyContent: "space-around",
       width: 165,
       height: 200,
       backgroundColor: "#ffffff",
       borderWidth: 1,
       borderColor: "#c0c0c0",
       margin: 5,
   },
   goodMenu: {
       display: "flex",
       flexDirection: "row",
       width: 155,
       alignItems: "center",
       justifyContent: "space-between",
   },
   homeNavsText: {
       color: "#191919",
       fontSize: 20,
       marginLeft: 20
   }
});

