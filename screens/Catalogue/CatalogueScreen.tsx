import * as React from "react";
import {Text, View} from "react-native";
import {style} from "./shCatalogueScreen";
import Header from "../../components/Header/Header";
import {Icon} from "native-base";

export default class CatalogueScreen extends React.Component<any, any> {
    // state = {
    //     isLoadingComplete: false,
    // };
    static navigationOptions = {
        drawerIcon: (tint) => (
            <Icon name="home"/>
        ),
    };
    render(){
        return(
            <View style={style.container}>
                <Header roomName= {`Catalogue`} navigation={this.props.navigation}/>
                <Text>Catalogue</Text>
            </View>
        )
    }
}