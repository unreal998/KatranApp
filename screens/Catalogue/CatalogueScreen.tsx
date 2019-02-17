import * as React from "react";
import {Text, View} from "react-native";
import {style} from "./shCatalogueScreen";

export default class CatalogueScreen extends React.Component {
    // state = {
    //     isLoadingComplete: false,
    // };
    render(){
        return(
            <View style={style.container}>
                <Text>Catalogue</Text>
            </View>
        )
    }
}