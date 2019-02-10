import {  createSwitchNavigator } from 'react-navigation';
import LogInScreen from "../screens/LogIn/LogInScreen";
import SignUpScreen from "../screens/SignUp/SignUpScreen";


export default createSwitchNavigator({
    LogIn: LogInScreen,
    SignUp: SignUpScreen
})