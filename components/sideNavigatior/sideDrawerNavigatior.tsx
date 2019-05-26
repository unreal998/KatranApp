import * as React from "react";
import {Image, ScrollView, Text, View} from "react-native";
import styles from "./shSideDrawerNavigation";
import { DrawerItems, SafeAreaView } from 'react-navigation';
import {connect} from "react-redux";


class sideDrawerNavigator extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            userName: ""
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.head}>
                    <Image style = {{width: 60, height: 60, marginRight: 4}} source={require("../../assets/images/logo.png")}/>
                    <Text style = {styles.userNameText}>{this.props.userName.toUpperCase()}</Text>
                </View>
                <SafeAreaView style={styles.container} forceInset={{top: 'always', horizontal: 'never'}}>
                    <DrawerItems {...this.props} />
                </SafeAreaView>
            </ScrollView>
        )
    }
}
function mapStateToProps(state) {
    return {
        userName: state.userName
    }
}
export default connect(mapStateToProps)(sideDrawerNavigator);