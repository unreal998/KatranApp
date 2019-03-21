import * as React from "react";
import {Text, View} from "react-native";
import {style} from "./shCatalogueScreen";
import {Header} from "../../components/Header/Header";

export default class CatalogueScreen extends React.Component {
    // state = {
    //     isLoadingComplete: false,
    // };
    static navigationOptions = ({navigation}) => {
        return{
            header: props => <Header roomName= {`Catalogue`}/>
        };
    };
    render(){
        return(
            <View style={style.container}>
                <Text>Catalogue</Text>
            </View>
        )
    }
}